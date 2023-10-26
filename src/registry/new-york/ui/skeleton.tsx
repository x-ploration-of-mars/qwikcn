import { QwikIntrinsicElements, component$ } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

export const Skeleton = component$<QwikIntrinsicElements["div"]>(
  ({ ...props }) => {
    return (
      <div
        {...props}
        class={cn("animate-pulse rounded-md bg-primary/10", props.class)}
      />
    );
  }
);
