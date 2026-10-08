import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { trajectory } from "@/lib/site";

export function TrajectoryChart() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="h-72 w-full">
      {ready ? (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trajectory} margin={{ top: 10, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="var(--color-line)" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} width={36} />
            <Tooltip
              contentStyle={{
                background: "var(--color-pine)",
                border: "none",
                borderRadius: "12px",
                color: "var(--color-ivory)",
              }}
            />
            <Area type="monotone" dataKey="clean" name="Clean claims %" stroke="var(--color-signal)" fill="var(--color-signal-2)" strokeWidth={2} />
            <Area type="monotone" dataKey="denials" name="Denial %" stroke="var(--color-copper)" fill="var(--color-copper-2)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <div className="h-full rounded-2xl bg-paper-2" />
      )}
    </div>
  );
}
