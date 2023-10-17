import { PropsOf, Slot, component$ } from "@builder.io/qwik";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "~/registry/new-york/ui/alert";

type CalloutProps = PropsOf<typeof Alert> & {
  icon?: string;
};

export const Callout = component$<CalloutProps>(({ title, icon, ...props }) => {
  return (
    <div {...props}>
      <Alert>
        {icon && <span class="mr-4 text-2xl">{icon}</span>}
        {title && <AlertTitle>{title}</AlertTitle>}
        <AlertDescription>
          <Slot />
        </AlertDescription>
      </Alert>
    </div>
  );
});
