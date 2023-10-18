import { component$ } from "@builder.io/qwik";
import { LuAlertTriangle } from "@qwikest/icons/lucide";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "~/registry/new-york/ui/alert";

export default component$(() => {
  return (
    <Alert variant="destructive">
      <LuAlertTriangle class="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  );
});
