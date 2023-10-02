import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

type CheckboxProps = Omit<QwikIntrinsicElements["input"], "children">;

export default component$<CheckboxProps>(({ name, ...props }) => {
  return (
    <div>
      <input
        type="checkbox"
        class={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary text-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          props.class
        )}
        name={name}
        id={name}
        {...props}
      />
    </div>
  );
});
