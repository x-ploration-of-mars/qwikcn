import { useTheme } from "qwik-themes";

import { useConfig } from "~/hooks/use-config";
import { Button } from "~/registry/new-york/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/registry/new-york/ui/card";
import { themes } from "~/registry/themes";
import { $, component$, useSignal } from "@builder.io/qwik";
import { LuMinus, LuPlus } from "@qwikest/icons/lucide";
import { ActivityGoalChart } from "./activity-goal-chart";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export const CardsActivityGoal = component$(() => {
  const { theme: mode } = useTheme();
  const config = useConfig();

  const theme = themes.find((theme) => theme.name === config.value.theme)!;
  const goal = useSignal(350);

  const onClick = $((adjustment: number) => {
    goal.value = Math.max(200, Math.min(400, goal.value + adjustment));
  });

  return (
    <Card>
      <CardHeader class="pb-4">
        <CardTitle>Move Goal</CardTitle>
        <CardDescription>Set your daily activity goal.</CardDescription>
      </CardHeader>
      <CardContent class="pb-2">
        <div class="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            class="h-8 w-8 shrink-0 rounded-full"
            onClick$={() => onClick(-10)}
            disabled={goal.value <= 200}
          >
            <LuMinus class="h-4 w-4" />
            <span class="sr-only">Decrease</span>
          </Button>
          <div class="flex-1 text-center">
            <div class="text-5xl font-bold tracking-tighter">{goal}</div>
            <div class="text-[0.70rem] uppercase text-muted-foreground">
              Calories/day
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            class="h-8 w-8 shrink-0 rounded-full"
            onClick$={() => onClick(10)}
            disabled={goal.value >= 400}
          >
            <LuPlus class="h-4 w-4" />
            <span class="sr-only">Increase</span>
          </Button>
        </div>
        <div class="my-3 h-[60px]">
          <ActivityGoalChart data={data} theme={theme} mode={mode} />
        </div>
      </CardContent>
      <CardFooter>
        <Button class="w-full">Set Goal</Button>
      </CardFooter>
    </Card>
  );
});
