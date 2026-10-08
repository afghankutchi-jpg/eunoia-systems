import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 a_pos;
attribute vec2 a_uv;
attribute vec3 a_color;
uniform vec2 u_res;
varying vec2 v_uv;
varying vec3 v_color;
void main() {
  vec2 clip = (a_pos / u_res) * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
  v_uv = a_uv;
  v_color = a_color;
}
`;

const FRAG = `
precision mediump float;
varying vec2 v_uv;
varying vec3 v_color;
void main() {
  float d = dot(v_uv, v_uv);
  if (d > 1.0) discard;
  float alpha = smoothstep(1.0, 0.2, d);
  gl_FragColor = vec4(v_color, alpha * 0.45);
}
`;

const PALETTE = [
  [0.78, 0.71, 0.54],
  [0.89, 0.83, 0.68],
  [0.62, 0.51, 0.32],
  [0.95, 0.92, 0.84],
];

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false, antialias: true, preserveDrawingBuffer: true });
    if (!gl) return;

    const vert = compile(gl, gl.VERTEX_SHADER, VERT);
    const frag = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vert || !frag) return;
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    const aPos = gl.getAttribLocation(program, "a_pos");
    const aUv = gl.getAttribLocation(program, "a_uv");
    const aColor = gl.getAttribLocation(program, "a_color");
    const uRes = gl.getUniformLocation(program, "u_res");
    const buffer = gl.createBuffer();

    const mouse = { x: -9999, y: -9999 };
    let width = 1;
    let height = 1;
    let count = 0;
    let points = new Float32Array(0);
    let frame = 0;
    let running = true;

    const spawn = () => {
      count = Math.max(80, Math.min(220, Math.floor((width * height) / 6000)));
      points = new Float32Array(count * 6);
      for (let i = 0; i < count; i += 1) {
        const color = PALETTE[i % PALETTE.length] ?? PALETTE[0];
        const o = i * 6;
        points[o] = Math.random() * width;
        points[o + 1] = Math.random() * height;
        points[o + 2] = 7 + Math.random() * 16;
        points[o + 3] = color[0];
        points[o + 4] = color[1];
        points[o + 5] = color[2];
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      spawn();
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const quad = new Float32Array(900 * 6 * 7);

    const paint = (drift: number) => {
      let v = 0;
      for (let i = 0; i < count; i += 1) {
        const o = i * 6;
        let x = points[o] ?? 0;
        let y = points[o + 1] ?? 0;
        const radius = points[o + 2] ?? 10;
        const r = points[o + 3] ?? 0.4;
        const g = points[o + 4] ?? 0.2;
        const b = points[o + 5] ?? 0.8;
        if (drift) {
          const angle = Math.sin(x * 0.004 + drift) + Math.cos(y * 0.003 - drift);
          let vx = Math.cos(angle) * 0.85;
          let vy = Math.sin(angle * 1.2) * 0.85;
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = dx * dx + dy * dy;
          if (dist < 26000 && dist > 0.01) {
            const push = (26000 - dist) / 26000;
            const len = Math.sqrt(dist);
            vx += (dx / len) * push * 3.2;
            vy += (dy / len) * push * 3.2;
          }
          x += vx;
          y += vy;
          if (x < -20) x = width + 20;
          if (x > width + 20) x = -20;
          if (y < -20) y = height + 20;
          if (y > height + 20) y = -20;
          points[o] = x;
          points[o + 1] = y;
        }
        const corners = [
          [-1, -1],
          [1, -1],
          [-1, 1],
          [-1, 1],
          [1, -1],
          [1, 1],
        ];
        for (const [cx, cy] of corners) {
          quad[v++] = x + cx * radius;
          quad[v++] = y + cy * radius;
          quad[v++] = cx;
          quad[v++] = cy;
          quad[v++] = r;
          quad[v++] = g;
          quad[v++] = b;
        }
      }

      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, quad.subarray(0, v), gl.DYNAMIC_DRAW);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(uRes, width, height);
      const stride = 7 * 4;
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, stride, 0);
      gl.enableVertexAttribArray(aUv);
      gl.vertexAttribPointer(aUv, 2, gl.FLOAT, false, stride, 8);
      gl.enableVertexAttribArray(aColor);
      gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, stride, 16);
      gl.drawArrays(gl.TRIANGLES, 0, v / 7);
    };

    const draw = (time: number) => {
      if (!running) return;
      frame = requestAnimationFrame(draw);
      if (document.hidden) return;
      paint(time * 0.0004);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    if (reduce) paint(0);
    else frame = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vert);
      gl.deleteShader(frag);
    };
  }, []);

  return <canvas ref={ref} className="particle-field" aria-hidden />;
}
