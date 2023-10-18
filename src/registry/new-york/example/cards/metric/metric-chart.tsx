/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { Theme } from "qwik-themes/lib-types/lib/types";
import { Theme as RegistryTheme } from "~/registry/themes";

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const ReactMetricChart = ({
  data,
  theme,
  mode,
}: {
  data: Record<string, any>[];
  theme: RegistryTheme;
  mode: Theme;
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Average
                      </span>
                      <span className="font-bold text-muted-foreground">
                        {payload[0].value}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Today
                      </span>
                      <span className="font-bold">{payload[1].value}</span>
                    </div>
                  </div>
                </div>
              );
            }

            return null;
          }}
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="average"
          activeDot={{
            r: 6,
            style: { fill: "var(--theme-primary)", opacity: 0.25 },
          }}
          style={
            {
              stroke: "var(--theme-primary)",
              opacity: 0.25,
              "--theme-primary": `hsl(${
                theme.cssVars[mode === "dark" ? "dark" : "light"].primary
              })`,
            } as React.CSSProperties
          }
        />
        <Line
          type="monotone"
          dataKey="today"
          strokeWidth={2}
          activeDot={{
            r: 8,
            style: { fill: "var(--theme-primary)" },
          }}
          style={
            {
              stroke: "var(--theme-primary)",
              "--theme-primary": `hsl(${
                theme.cssVars[mode === "dark" ? "dark" : "light"].primary
              })`,
            } as React.CSSProperties
          }
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const MetricChart = qwikify$(ReactMetricChart);

export { MetricChart };
