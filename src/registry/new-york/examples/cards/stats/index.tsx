import { component$ } from "@builder.io/qwik";
import { useTheme } from "qwik-themes";

import { useConfig } from "~/hooks/use-config";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/registry/new-york/ui/card";
import { themes } from "~/registry/themes";
import { StatsLineChart } from "./stats-line-chart";
import { StatsBarChart } from "./stats-bar-chart";

const data = [
  {
    revenue: 10400,
    subscription: 240,
  },
  {
    revenue: 14405,
    subscription: 300,
  },
  {
    revenue: 9400,
    subscription: 200,
  },
  {
    revenue: 8200,
    subscription: 278,
  },
  {
    revenue: 7000,
    subscription: 189,
  },
  {
    revenue: 9600,
    subscription: 239,
  },
  {
    revenue: 11244,
    subscription: 278,
  },
  {
    revenue: 26475,
    subscription: 189,
  },
];

export const CardsStats = component$(() => {
  const { theme: mode } = useTheme();
  const config = useConfig();

  const theme = themes.find((theme) => theme.name === config.value.theme)!;

  return (
    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-normal">Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">$15,231.89</div>
          <p class="text-xs text-muted-foreground">+20.1% from last month</p>
          <div class="h-[80px]">
            <StatsLineChart data={data} theme={theme} mode={mode} />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-normal">Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">+2350</div>
          <p class="text-xs text-muted-foreground">+180.1% from last month</p>
          <div class="mt-4 h-[80px]">
            <StatsBarChart data={data} theme={theme} mode={mode} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
});
