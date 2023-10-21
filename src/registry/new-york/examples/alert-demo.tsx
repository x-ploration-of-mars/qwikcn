import { component$ } from "@builder.io/qwik";
import { LuRocket } from "@qwikest/icons/lucide";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "~/registry/new-york/ui/alert";

export default component$(() => {
  return (
    <Alert>
      <LuRocket class="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
});
