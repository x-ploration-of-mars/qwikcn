import { QwikIntrinsicElements, Slot, component$ } from "@builder.io/qwik";
import { useConfig } from "~/hooks/use-config";
import { Style } from "~/registry/styles";

type StyleWrapperProps = QwikIntrinsicElements["div"] & {
  styleName?: Style["name"];
};

export const StyleWrapper = component$(({ styleName }: StyleWrapperProps) => {
  const config = useConfig();

  if (!styleName || config.value.style === styleName) {
    return (
      <>
        <Slot />
      </>
    );
  }

  return null;
});
