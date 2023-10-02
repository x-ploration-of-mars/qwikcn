import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type AlertProps = QwikIntrinsicElements["div"] &
  VariantProps<typeof alertVariants>;
const Alert = component$<AlertProps>(({ variant, ...props }) => {
  return (
    <div
      role="alert"
      class={cn(alertVariants({ variant }), props.class)}
      {...props}
    />
  );
});

type AlertTitleProps = QwikIntrinsicElements["h5"];
const AlertTitle = component$<AlertTitleProps>(({ ...props }) => (
  <h5
    class={cn("mb-1 font-medium leading-none tracking-tight", props.class)}
    {...props}
  />
));

type AlertDescriptionProps = QwikIntrinsicElements["div"];
const AlertDescription = component$<AlertDescriptionProps>(({ ...props }) => (
  <div class={cn("text-sm [&_p]:leading-relaxed", props.class)} {...props} />
));

export { Alert, AlertTitle, AlertDescription };
