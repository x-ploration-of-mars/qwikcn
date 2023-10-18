/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { Theme } from "qwik-themes/lib-types/lib/types";
import { Theme as RegistryTheme } from "~/registry/themes";

import { Line, LineChart, ResponsiveContainer } from "recharts";

const ReactStatsLineChart = ({
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
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="revenue"
          activeDot={{
            r: 6,
            style: { fill: "var(--theme-primary)", opacity: 0.25 },
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

const StatsLineChart = qwikify$(ReactStatsLineChart);

export { StatsLineChart };
