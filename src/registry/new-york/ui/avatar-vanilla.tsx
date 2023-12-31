import { QwikIntrinsicElements, Slot, component$ } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

const Avatar = component$<QwikIntrinsicElements["div"]>(({ ...props }) => {
  return (
    <div
      {...props}
      class={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        props.class
      )}
    >
      <Slot />
    </div>
  );
});

const AvatarImage = component$<Omit<QwikIntrinsicElements["img"], "children">>(
  ({ ...props }) => (
    <img {...props} class={cn("aspect-square h-full w-full", props.class)} />
  )
);

const AvatarFallback = component$<QwikIntrinsicElements["div"]>(
  ({ ...props }) => {
    return (
      <div
        {...props}
        class={cn(
          "flex h-full w-full items-center justify-center rounded-full bg-muted",
          props.class
        )}
      >
        <Slot />
      </div>
    );
  }
);

export { Avatar, AvatarImage, AvatarFallback };
