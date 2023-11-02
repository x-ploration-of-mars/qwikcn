import { PropsOf, Slot, component$ } from "@builder.io/qwik";
import { cn } from "~/lib/utils";
import { CodeBlockWrapper } from "~/components/code-block-wrapper";

export const ComponentSource = component$<PropsOf<typeof CodeBlockWrapper>>(
  ({ ...props }) => {
    return (
      <CodeBlockWrapper
        expandButtonTitle="Expand"
        class={cn("my-6 overflow-hidden rounded-md", props.class)}
      >
        <Slot />
      </CodeBlockWrapper>
    );
  }
);
