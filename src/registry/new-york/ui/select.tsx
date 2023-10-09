import { cn } from "~/lib/utils";
import { QwikIntrinsicElements, Slot, component$ } from "@builder.io/qwik";
import { LuFilter } from "@qwikest/icons/lucide";

type SelectProps = QwikIntrinsicElements["select"];
const Select = component$<SelectProps>(({ ...props }) => (
  <select {...props}>
    <Slot />
  </select>
));

type SelectGroupProps = QwikIntrinsicElements["optgroup"];
const SelectGroup = component$<SelectGroupProps>(({ ...props }) => (
  <optgroup {...props}>
    <Slot />
  </optgroup>
));

type SelectValueProps = QwikIntrinsicElements["option"];
const SelectValue = component$<SelectValueProps>(({ children, ...props }) => (
  <option {...props}>{children}</option>
));

type SelectTriggerProps = QwikIntrinsicElements["div"];
const SelectTrigger = component$<SelectTriggerProps>(({ ...props }) => (
  <div class={cn("tailwind classes", props.class)} {...props}>
    <Slot />
    <LuFilter class="h-4 w-4 opacity-50" />
  </div>
));

type SelectContentProps = QwikIntrinsicElements["div"];
const SelectContent = component$<SelectContentProps>(({ ...props }) => (
  <div class={cn("tailwind classes", props.class)} {...props}>
    <Slot />
  </div>
));

type SelectLabelProps = QwikIntrinsicElements["label"];
const SelectLabel = component$<SelectLabelProps>(({ ...props }) => (
  <label
    class={cn("px-2 py-1.5 text-sm font-semibold", props.class)}
    {...props}
  />
));

type SelectItemProps = QwikIntrinsicElements["option"];
const SelectItem = component$<SelectItemProps>(({ children, ...props }) => (
  <option class={cn("tailwind classes", props.class)} {...props}>
    {children}
  </option>
));

type SelectSeparatorProps = Omit<QwikIntrinsicElements["hr"], "children">;
const SelectSeparator = component$<SelectSeparatorProps>(({ ...props }) => (
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
