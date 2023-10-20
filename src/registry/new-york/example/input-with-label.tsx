import { component$ } from "@builder.io/qwik";
import { Input } from "~/registry/new-york/ui/input";
import { Label } from "~/registry/new-york/ui/label";

export default component$(() => {
  return (
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <Label for="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  );
});
