/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { Theme } from "qwik-themes/lib-types/lib/types";
import { Theme as RegistryTheme } from "~/registry/themes";

import { Bar, BarChart, ResponsiveContainer } from "recharts";

const ReactActivityGoalChart = ({
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
      <BarChart data={data}>
        <Bar
          dataKey="goal"
          style={
            {
              fill: "var(--theme-primary)",
              opacity: 0.2,
              "--theme-primary": `hsl(${
                theme.cssVars[mode === "dark" ? "dark" : "light"].primary
              })`,
            } as React.CSSProperties
          }
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const ActivityGoalChart = qwikify$(ReactActivityGoalChart);

export { ActivityGoalChart };
