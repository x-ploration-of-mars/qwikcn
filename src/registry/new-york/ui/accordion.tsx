import { component$, Slot } from "@builder.io/qwik";

import {
  AccordionRoot as QwikUIAccordionRoot,
  AccordionItem as QwikUIAccordionItem,
  AccordionHeader as QwikUIAccordionHeader,
  AccordionTrigger as QwikUIAccordionTrigger,
  AccordionContent as QwikUIAccordionContent,
  type AccordionItemProps,
  type AccordionTriggerProps,
  type AccordionHeaderProps,
} from "@qwik-ui/headless";

import { cn } from "~/lib/utils";

import { LuChevronDown } from "@qwikest/icons/lucide";

const Accordion = QwikUIAccordionRoot;

const AccordionItem = component$<AccordionItemProps>((props) => {
  return (
    <QwikUIAccordionItem {...props} class={cn("border-b", props.class)}>
      <Slot />
    </QwikUIAccordionItem>
  );
});

// AccordionHeader will render as an h3 element by default, which can be problematic with markdown cn-prose styles
const AccordionHeader = component$<AccordionHeaderProps>((props) => {
  return (
    <QwikUIAccordionHeader {...props} class={cn("flex", props.class)}>
      <Slot />
    </QwikUIAccordionHeader>
  );
});

const AccordionTrigger = component$<AccordionTriggerProps>((props) => {
  return (
    <QwikUIAccordionTrigger
      {...props}
      class={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        props.class
      )}
    >
      <Slot />
      <LuChevronDown class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </QwikUIAccordionTrigger>
  );
});

const AccordionContent = component$<AccordionItemProps>((props) => {
  return (
    <QwikUIAccordionContent
      {...props}
      class={cn(
        "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        props.class
      )}
    >
      <div class="pb-4 pt-0">
        <Slot />
      </div>
    </QwikUIAccordionContent>
  );
});

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  LuChevronDown,
};
