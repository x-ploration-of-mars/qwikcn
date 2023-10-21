import { Checkbox } from "~/registry/new-york/ui/checkbox";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        for="terms"
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
});
