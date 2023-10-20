import { PropsOf, component$ } from "@builder.io/qwik";
import { cn } from "~/lib/utils";
import { Slider } from "~/registry/new-york/ui/slider-vanilla";

type SliderProps = PropsOf<typeof Slider>;

export default component$<SliderProps>(({ ...props }) => {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", props.class)}
      {...props}
    />
  );
});
