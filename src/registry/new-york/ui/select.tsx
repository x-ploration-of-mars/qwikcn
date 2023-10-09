import { cn } from "~/lib/utils";
import { QwikIntrinsicElements, Slot, component$ } from "@builder.io/qwik";
import { LuFilter } from "@qwikest/icons/lucide";

const Select = component$(({ ...props }) => (
  <select {...props}>
    <Slot />
  </select>
));

const SelectGroup = component$(({ ...props }) => (
  <optgroup {...props}>
    <Slot />
  </optgroup>
));

const SelectValue = component$<QwikIntrinsicElements["option"]>(
  ({ children, ...props }) => <option {...props}>{children}</option>
);

const SelectTrigger = component$<QwikIntrinsicElements["div"]>(
  ({ ...props }) => (
    <div class={cn("tailwind classes", props.class)} {...props}>
      <Slot />
      <LuFilter class="h-4 w-4 opacity-50" />
    </div>
  )
);

const SelectContent = component$<QwikIntrinsicElements["div"]>(
  ({ ...props }) => (
    <div class={cn("tailwind classes", props.class)} {...props}>
      <Slot />
    </div>
  )
);

const SelectLabel = component$<QwikIntrinsicElements["label"]>(
  ({ ...props }) => (
    <label
      class={cn("px-2 py-1.5 text-sm font-semibold", props.class)}
      {...props}
    />
  )
);

const SelectItem = component$<QwikIntrinsicElements["option"]>(
  ({ children, ...props }) => (
    <option class={cn("tailwind classes", props.class)} {...props}>
      {children}
    </option>
  )
);

const SelectSeparator = component$<
  Omit<QwikIntrinsicElements["hr"], "children">
>(({ ...props }) => (
  <hr class={cn("-mx-1 my-1 h-px bg-muted", props.class)} {...props} />
));

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
