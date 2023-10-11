import { Slot, component$ } from "@builder.io/qwik";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "~/registry/new-york/ui/alert";

interface CalloutProps {
  icon?: string;
  title?: string;
  children?: React.ReactNode;
}

export const Callout = component$(({ title, icon, ...props }: CalloutProps) => {
  return (
    <Alert {...props}>
      {icon && <span class="mr-4 text-2xl">{icon}</span>}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>
        <Slot />
      </AlertDescription>
    </Alert>
  );
});
