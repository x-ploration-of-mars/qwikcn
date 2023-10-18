import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

type InputProps = Omit<QwikIntrinsicElements["input"], "children"> & {
  error?: string;
};

const Input = component$<InputProps>(({ name, error, ...props }) => {
  return (
    <div>
      <input
        aria-errormessage={`${name}-error`}
        aria-invalid={!!error}
        class={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",

          props.class
        )}
        id={name}
        {...props}
      />
      {error && (
        <div id={`${name}-error`} class="mt-1 text-sm text-destructive">
          {error}
        </div>
      )}
    </div>
  );
});

export { Input };
