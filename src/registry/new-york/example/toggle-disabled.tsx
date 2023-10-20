import { component$ } from "@builder.io/qwik";
import { LuUnderline } from "@qwikest/icons/lucide";

import { Toggle } from "~/registry/new-york/ui/toggle-vanilla";

export default component$(() => {
  return (
    <Toggle aria-label="Toggle italic" disabled>
      <LuUnderline class="h-4 w-4" />
    </Toggle>
  );
});
