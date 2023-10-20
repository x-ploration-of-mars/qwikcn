import { QwikIntrinsicElements, Slot, component$ } from "@builder.io/qwik";

const Collapsible = component$<QwikIntrinsicElements["details"]>(
  ({ ...props }) => {
    return (
      <details {...props}>
        <Slot />
      </details>
    );
  }
);

const CollapsibleTrigger = component$<QwikIntrinsicElements["summary"]>(
  ({ ...props }) => {
    return (
      <summary {...props}>
        <Slot />
      </summary>
    );
  }
);

const CollapsibleContent = component$<QwikIntrinsicElements["div"]>(
  ({ ...props }) => {
    return (
      <div {...props}>
        <Slot />
      </div>
    );
  }
);

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
