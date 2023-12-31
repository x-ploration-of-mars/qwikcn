import { component$ } from "@builder.io/qwik";
import { Label } from "~/registry/new-york/ui/label";
import { Switch } from "~/registry/new-york/ui/switch-vanilla";

export default component$(() => {
  return (
    <div class="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label for="airplane-mode">Airplane Mode</Label>
    </div>
  );
});
