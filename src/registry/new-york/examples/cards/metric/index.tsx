import { component$ } from "@builder.io/qwik";
import { useTheme } from "qwik-themes";

import { useConfig } from "~/hooks/use-config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/registry/new-york/ui/card";
import { themes } from "~/registry/themes";
import { MetricChart } from "./metric-chart";

const data = [
  {
    average: 400,
    today: 240,
  },
  {
    average: 300,
    today: 139,
  },
  {
    average: 200,
    today: 980,
  },
  {
    average: 278,
    today: 390,
  },
  {
    average: 189,
    today: 480,
  },
  {
    average: 239,
    today: 380,
  },
  {
    average: 349,
    today: 430,
  },
];

export const CardsMetric = component$(() => {
  const { theme: mode } = useTheme();
  const config = useConfig();

  const theme = themes.find((theme) => theme.name === config.value.theme)!;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise Minutes</CardTitle>
        <CardDescription>
          Your excercise minutes are ahead of where you normally are.
        </CardDescription>
      </CardHeader>
      <CardContent class="pb-4">
        <div class="h-[200px]">
          <MetricChart data={data} theme={theme} mode={mode} />
        </div>
      </CardContent>
    </Card>
  );
});
