import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

type TextareaProps = QwikIntrinsicElements["textarea"] & {
  error?: string;
};

const Textarea = component$<TextareaProps>(
  ({ children: _, name, error, ...props }) => {
    return (
      <>
        <textarea
          {...props}
          class={cn(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            props.class
          )}
        />
        {error && <div id={`${name}-error`}>{error}</div>}
      </>
    );
  }
);

export { Textarea };
