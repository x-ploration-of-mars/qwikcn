import { component$ } from "@builder.io/qwik";
import { LuRotateCw } from "@qwikest/icons/lucide";

import { Button } from "~/registry/new-york/ui/button";

export default component$(() => {
  return (
    <Button disabled>
      <LuRotateCw class="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
});
