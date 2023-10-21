import { Input } from "~/registry/new-york/ui/input";
import { Label } from "~/registry/new-york/ui/label";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <Label for="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  );
});
