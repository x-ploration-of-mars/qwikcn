import { cn } from "~/lib/utils";
import { useConfig } from "~/hooks/use-config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/registry/new-york/ui/select";
import { Style, styles } from "~/registry/styles";
import { QwikIntrinsicElements, component$ } from "@builder.io/qwik";

export const StyleSwitcher = component$<QwikIntrinsicElements["select"]>(
  ({ ...props }) => {
    const config = useConfig();

    return (
      <Select
        value={config.value.style}
        onChange$={() => (value: Style["name"]) =>
          (config.value = {
            ...config.value,
            style: value,
          })
        }
      >
        <SelectTrigger
          class={cn(
            "h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4",
            props.class
          )}
        >
          <span class="text-muted-foreground">Style: </span>
          <SelectValue placeholder="Select style" />
        </SelectTrigger>
        <SelectContent>
          {styles.map((style) => (
            <SelectItem key={style.name} value={style.name} class="text-xs">
              {style.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
);
