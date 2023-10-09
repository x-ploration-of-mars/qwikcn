import {
  QwikIntrinsicElements,
  Slot,
  component$,
  useSignal,
} from "@builder.io/qwik";

import { cn } from "~/lib/utils";
import { Button } from "~/registry/new-york/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/registry/new-york/ui/collapsible";

type CodeBlockProps = QwikIntrinsicElements["details"] & {
  expandButtonTitle?: string;
};

const CodeBlockWrapper = component$(
  ({ expandButtonTitle = "View Code", ...props }: CodeBlockProps) => {
    const isOpened = useSignal(false);

    return (
      <Collapsible open={isOpened.value}>
        <div class={cn("relative overflow-hidden", props.class)} {...props}>
          <CollapsibleContent
            class={cn("overflow-hidden", !isOpened.value && "max-h-32")}
          >
            <div
              class={cn(
                "[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]",
                !isOpened.value
                  ? "[&_pre]:overflow-hidden"
                  : "[&_pre]:overflow-auto]"
              )}
            >
              <Slot />
            </div>
          </CollapsibleContent>
          <div
            class={cn(
              "absolute flex items-center justify-center bg-gradient-to-b from-zinc-700/30 to-zinc-950/90 p-2",
              isOpened.value ? "inset-x-0 bottom-0 h-12" : "inset-0"
            )}
          >
            <CollapsibleTrigger>
              <Button variant="secondary" class="h-8 text-xs">
                {isOpened.value ? "Collapse" : expandButtonTitle}
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>
      </Collapsible>
    );
  }
);

export { CodeBlockWrapper };
