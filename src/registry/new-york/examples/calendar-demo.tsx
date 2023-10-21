import { component$, useSignal } from "@builder.io/qwik";
import { Calendar } from "~/registry/new-york/ui/calendar-qwikified";

export default component$(() => {
  const date = useSignal<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date.value}
      onSelect$={() => {
        date.value = new Date();
      }}
      className="rounded-md border shadow"
    />
  );
});
