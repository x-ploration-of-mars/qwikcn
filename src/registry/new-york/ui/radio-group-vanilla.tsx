import { QwikIntrinsicElements, component$ } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

const RadioGroup = component$<QwikIntrinsicElements["div"]>(({ ...props }) => {
  return <div class={cn("grid gap-2", props.class)} {...props} />;
});

const RadioGroupItem = component$<
  Omit<QwikIntrinsicElements["radio"], "children">
>(({ ...props }) => {
  return (
    <div
      class={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        props.class
      )}
    >
      <input type="radio" {...props} />
    </div>
  );
});

export { RadioGroup, RadioGroupItem };
