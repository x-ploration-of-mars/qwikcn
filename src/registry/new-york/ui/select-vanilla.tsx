import { cn } from "~/lib/utils";
import { QwikIntrinsicElements, Slot, component$ } from "@builder.io/qwik";
import { LuFilter } from "@qwikest/icons/lucide";

const Select = component$<QwikIntrinsicElements["select"]>(({ ...props }) => (
  <select {...props}>
    <Slot />
  </select>
));

const SelectGroup = component$<QwikIntrinsicElements["optgroup"]>(
  ({ ...props }) => (
    <optgroup {...props}>
      <Slot />
    </optgroup>
  )
);

const SelectValue = component$<QwikIntrinsicElements["option"]>(
  ({ children, ...props }) => <option {...props}>{children}</option>
);

const SelectTrigger = component$<QwikIntrinsicElements["div"]>(
  ({ ...props }) => (
    <div
      {...props}
      class={cn(
        "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        props.class
      )}
    >
      <Slot />
      <LuFilter class="h-4 w-4 opacity-50" />
    </div>
  )
);

const SelectContent = component$<
  QwikIntrinsicElements["div"] & { position?: "item-aligned" | "popper" }
>(({ position = "popper", ...props }) => (
  <div
    {...props}
    class={cn(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" &&
        "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      props.class
    )}
  >
    <div
      class={cn(
        "p-1",
        position === "popper" &&
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
      )}
    >
      <Slot />
    </div>
  </div>
));

const SelectLabel = component$<QwikIntrinsicElements["label"]>(
  ({ ...props }) => (
    <label
      {...props}
      class={cn("px-2 py-1.5 text-sm font-semibold", props.class)}
    />
  )
);

const SelectItem = component$<QwikIntrinsicElements["option"]>(
  ({ children, ...props }) => (
    <option
      {...props}
      class={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
    >
      {children}
    </option>
  )
);

const SelectSeparator = component$<QwikIntrinsicElements["hr"]>(
  ({ ...props }) => (
    <hr class={cn("-mx-1 my-1 h-px bg-muted", props.class)} {...props} />
  )
);

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
