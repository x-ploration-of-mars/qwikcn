import { component$ } from "@builder.io/qwik";
import { LuChevronRight } from "@qwikest/icons/lucide";

import { Button } from "~/registry/new-york/ui/button";

export default component$(() => {
  return (
    <Button variant="outline" size="icon">
      <LuChevronRight class="h-4 w-4" />
    </Button>
  );
});
