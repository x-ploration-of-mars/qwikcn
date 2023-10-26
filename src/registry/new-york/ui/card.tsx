import { component$, type QwikIntrinsicElements, Slot } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

const Card = component$<QwikIntrinsicElements["div"]>((props) => {
  return (
    <div
      {...props}
      class={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        props.class
      )}
    >
      <Slot />
    </div>
  );
});

const CardHeader = component$<QwikIntrinsicElements["div"]>((props) => {
  return (
    <div {...props} class={cn("flex flex-col space-y-1.5 p-6", props.class)}>
      <Slot />
    </div>
  );
});

const CardTitle = component$<QwikIntrinsicElements["div"]>((props) => {
  return (
    <div
      {...props}
      class={cn("font-semibold leading-none tracking-tight", props.class)}
    >
      <Slot />
    </div>
  );
});

const CardDescription = component$<QwikIntrinsicElements["p"]>((props) => {
  return (
    <p {...props} class={cn("text-sm text-muted-foreground", props.class)}>
      <Slot />
    </p>
  );
});

const CardContent = component$<QwikIntrinsicElements["div"]>((props) => {
  return (
    <div {...props} class={cn("p-6 pt-0", props.class)}>
      <Slot />
    </div>
  );
});

const CardFooter = component$<QwikIntrinsicElements["div"]>(({ ...props }) => {
  return (
    <div {...props} class={cn("flex items-center p-6 pt-0", props.class)}>
      <Slot />
    </div>
  );
});

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
