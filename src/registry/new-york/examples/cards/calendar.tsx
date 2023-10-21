import { component$ } from "@builder.io/qwik";
import { addDays } from "date-fns";

import { Calendar } from "~/registry/new-york/ui/calendar-qwikified";
import { Card, CardContent } from "~/registry/new-york/ui/card";

const start = new Date(2023, 5, 5);

export const CardsCalendar = component$(() => {
  return (
    <Card class="max-w-[260px]">
      <CardContent class="p-1">
        <Calendar
          numberOfMonths={1}
          mode="range"
          defaultMonth={start}
          selected={{
            from: start,
            to: addDays(start, 8),
          }}
        />
      </CardContent>
    </Card>
  );
});
