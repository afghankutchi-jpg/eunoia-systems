import { cp, mkdir, readFile, readdir, writeFile, rm } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";

const exec = promisify(execFile);
const origin = process.env.PREVIEW_ORIGIN ?? "http://127.0.0.1:8080";
const outDir = "/tmp/eunoia-preview";
const zipPath = "/workspace/artifacts/eunoia-systems-purple-preview.zip";

const paths = [
  "/",
  "/about",
  "/services",
  "/who-we-serve",
  "/specialties",
  "/technology",
  "/process",
  "/compliance",
  "/results",
  "/insights",
  "/contact",
  "/services/front-office",
  "/services/medical-billing",
  "/services/ar-recovery",
  "/services/credentialing",
  "/services/denial-management",
  "/services/patient-financials",
  "/services/value-based-care",
  "/services/coding-integrity",
  "/insights/first-pass-is-the-number",
  "/insights/aging-past-ninety",
  "/insights/statements-people-pay",
  "/insights/enroll-before-you-bill",
];

function fileFor(pathname) {
  const clean = pathname.split("?")[0].replace(/\/$/, "") || "/";
  if (clean === "/") return "index.html";
  return `${clean.slice(1).replaceAll("/", "-")}.html`;
}

const boot = `<script>
document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
const menuButton = document.querySelector("button[aria-controls='site-menu'], button[aria-label='Open menu'], button[aria-label='Close menu']");
const menu = document.getElementById("offline-menu");
if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const open = menu.hasAttribute("hidden");
    if (open) menu.removeAttribute("hidden");
    else menu.setAttribute("hidden", "");
    menuButton.setAttribute("aria-expanded", open ? "true" : "false");
  });
}
const search = document.querySelector("input[placeholder='Search specialties']");
if (search) {
  const cards = [...document.querySelectorAll("article")].filter((card) => card.querySelector("h2"));
  const buttons = [...document.querySelectorAll("button")].filter((button) => ["All","Procedural","Cognitive","Behavioral","Facility","Dental"].includes(button.textContent.trim()));
  let group = "All";
  const apply = () => {
    const q = search.value.trim().toLowerCase();
    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const matchesGroup = group === "All" || text.includes(group.toLowerCase());
      card.hidden = !(matchesGroup && text.includes(q));
    });
  };
  search.addEventListener("input", apply);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      group = button.textContent.trim();
      buttons.forEach((item) => item.classList.toggle("is-on", item === button));
      apply();
    });
  });
}
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const practice = String(data.get("practice") || "Practice");
    const body = ["Name: " + (data.get("name") || ""), "Email: " + (data.get("email") || ""), "Practice: " + practice, "Interest: " + (data.get("topic") || ""), "", String(data.get("message") || "")].join("\\n");
    location.href = "mailto:info@eunoiasystems.com?subject=" + encodeURIComponent("Revenue review · " + practice) + "&body=" + encodeURIComponent(body);
  });
}
</script>`;

function rewriteLinks(html) {
  return html.replace(/href="(\/[^"]*)"/g, (full, href) => {
    if (href.startsWith("/src/") || href.startsWith("/@") || href.startsWith("/__grok") || href.startsWith("/favicon")) return full;
    const [pathname] = href.split("?");
    return `href="${fileFor(pathname)}"`;
  });
}

async function cssText() {
  const dir = "/workspace/.vercel/output/static/assets";
  const files = await readdir(dir);
  const cssFile = files.find((name) => name.startsWith("styles-") && name.endsWith(".css"));
  if (!cssFile) throw new Error("Built CSS not found. Run npm run build first.");
  const css = await readFile(path.join(dir, cssFile), "utf8");
  return `${css}\n.reveal{opacity:1!important;transform:none!important;filter:none!important;}`;
}

async function main() {
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });
  await mkdir("/workspace/artifacts", { recursive: true });
  const css = await cssText();
  for (const route of paths) {
    const res = await fetch(origin + route);
    if (!res.ok) throw new Error(`${route} -> ${res.status}`);
    let html = await res.text();
    html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
    html = html.replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "");
    html = html.replace(/<link\b[^>]*rel="manifest"[^>]*>/gi, "");
    html = html.replace(/<link\b[^>]*stylesheet[^>]*>/gi, "");
    html = html.replace(/<link\b[^>]*rel="icon"[^>]*>/gi, "");
    html = html.replace(/<link\b[^>]*apple-touch-icon[^>]*>/gi, "");
    html = rewriteLinks(html);
    html = html.replaceAll('src="/images/', 'src="images/');
    html = html.replace("</head>", `<style>${css}</style></head>`);
    html = html.replace("</body>", `${boot}</body>`);
    const file = path.join(outDir, fileFor(route));
    await writeFile(file, html);
    console.log(route, "->", path.basename(file), html.length);
  }
  await cp("/workspace/public/images", path.join(outDir, "images"), { recursive: true });
  await exec("python3", [
    "-c",
    `import zipfile
from pathlib import Path
src = Path(${JSON.stringify(outDir)})
dest = Path(${JSON.stringify(zipPath)})
with zipfile.ZipFile(dest, "w", compression=zipfile.ZIP_DEFLATED) as zf:
    for path in src.rglob("*"):
        if path.is_file():
            zf.write(path, path.relative_to(src).as_posix())
print(dest, dest.stat().st_size)`,
  ]);
  console.log("zip", zipPath);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
