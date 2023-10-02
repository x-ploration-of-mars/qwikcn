import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "~/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

type LabelProps = QwikIntrinsicElements["label"] &
  VariantProps<typeof labelVariants>;

export default component$<LabelProps>((props) => {
  return (
    <label class={cn(labelVariants(), props.class)} {...props}>
      <Slot />
    </label>
  );
});
