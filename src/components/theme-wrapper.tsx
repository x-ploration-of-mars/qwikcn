import { cn } from "~/lib/utils";
import { useConfig } from "~/hooks/use-config";
import { QwikIntrinsicElements, Slot, component$ } from "@builder.io/qwik";

type ThemeWrapperProps = QwikIntrinsicElements["div"] & {
  defaultTheme?: string;
};
export const ThemeWrapper = component$(
  ({ defaultTheme, ...props }: ThemeWrapperProps) => {
    const config = useConfig();

    return (
      <div
        class={cn(
          `theme-${defaultTheme || config.value.theme}`,
          "w-full",
          props.class
        )}
        style={{
          "--radius": `${defaultTheme ? 0.5 : config.value.radius}rem`,
        }}
      >
        <Slot />
      </div>
    );
  }
);
