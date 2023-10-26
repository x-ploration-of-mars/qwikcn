import { QwikIntrinsicElements, component$ } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

const Switch = component$<Omit<QwikIntrinsicElements["checkbox"], "children">>(
  ({ checked, ...props }) => (
    <div
      class={cn(
        "peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        props.class
      )}
    >
      <input {...props} type="checkbox" class="hidden" />
      <div
        class={cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform",
          {
            "translate-x-4": checked,
            "translate-x-0": !checked,
          }
        )}
      />
    </div>
  )
);

export { Switch };
