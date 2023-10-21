import { QwikIntrinsicElements, component$ } from "@builder.io/qwik";
import { cn } from "~/lib/utils";
import { CodeBlockWrapper } from "~/components/code-block-wrapper";

type ComponentSourceProps = QwikIntrinsicElements["details"] & {
  src: string;
};

export const ComponentSource = component$(
  ({ children, ...props }: ComponentSourceProps) => {
    return (
      <CodeBlockWrapper
        expandButtonTitle="Expand"
        class={cn("my-6 overflow-hidden rounded-md", props.class)}
      >
        {children}
      </CodeBlockWrapper>
    );
  }
);
