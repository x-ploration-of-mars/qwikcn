import { component$ } from "@builder.io/qwik";
import { LuItalic } from "@qwikest/icons/lucide";

import { Toggle } from "~/registry/new-york/ui/toggle-vanilla";

export default component$(() => {
  return (
    <Toggle aria-label="Toggle italic">
      <LuItalic class="mr-2 h-4 w-4" />
      Italic
    </Toggle>
  );
});
