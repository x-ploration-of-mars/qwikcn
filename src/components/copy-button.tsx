import { cn } from "~/lib/utils";

import {
  $,
  QwikIntrinsicElements,
  component$,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { LuCheck, LuCopy } from "@qwikest/icons/lucide";
import { Button } from "~/registry/new-york/ui/button";

type CopyButtonProps = QwikIntrinsicElements["button"] & {
  value: string;
  src?: string;
};
export async function copyToClipboardWithMeta(value: string) {
  navigator.clipboard.writeText(value);
}

const CopyButton = component$<CopyButtonProps>(({ value, ...props }) => {
  const hasCopied = useSignal(false);

  useTask$(({ track }) => {
    track(() => hasCopied.value);
    setTimeout(
      $(() => {
        hasCopied.value = false;
      }),
      2000
    );
  });

  return (
    <Button
      size="icon"
      variant="ghost"
      class={cn(
        "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
        props.class
      )}
      onClick$={() => {
        copyToClipboardWithMeta(value);
        hasCopied.value = true;
      }}
      {...props}
    >
      <span class="sr-only">Copy</span>
      {hasCopied.value ? (
        <LuCheck class="h-3 w-3" />
      ) : (
        <LuCopy class="h-3 w-3" />
      )}
    </Button>
  );
});

export { CopyButton };
