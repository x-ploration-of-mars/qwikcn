import { component$ } from "@builder.io/qwik";
import { Label } from "~/registry/new-york/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "~/registry/new-york/ui/radio-group-vanilla";

export default component$(() => {
  return (
    <RadioGroup>
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label for="r1">Default</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label for="r2">Comfortable</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label for="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
});
