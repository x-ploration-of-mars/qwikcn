import { QwikIntrinsicElements, component$ } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

const Slider = component$<Omit<QwikIntrinsicElements["range"], "children">>(
  ({ ...props }) => (
    <div
      class={cn(
        "relative flex w-full touch-none select-none items-center",
        props.class
      )}
    >
      <div class="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
        <input {...props} type="range" class="absolute h-full bg-primary" />
      </div>
      <div class="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
    </div>
  )
);

export { Slider };
