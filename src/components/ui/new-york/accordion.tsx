import { component$, Slot } from "@builder.io/qwik";

import { cn } from "~/lib/utils";

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

import { LuChevronDown } from "@qwikest/icons/lucide";

const Accordion = QwikUIAccordionRoot;

const AccordionItem = component$<AccordionItemProps>((props) => {
  return (
    <QwikUIAccordionItem class={cn("border-b", props.class)} {...props}>
      <Slot />
    </QwikUIAccordionItem>
  );
});

// AccordionHeader will render as an h3 element by default, which can be problematic with markdown cn-prose styles
const AccordionHeader = component$<AccordionHeaderProps>((props) => {
  return (
    <QwikUIAccordionHeader class="flex" {...props}>
      <Slot />
    </QwikUIAccordionHeader>
  );
});

const AccordionTrigger = component$<AccordionTriggerProps>((props) => {
  return (
    <QwikUIAccordionTrigger
      class={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        props.class
      )}
      {...props}
    >
      <Slot />
      <LuChevronDown class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </QwikUIAccordionTrigger>
  );
});

const AccordionContent = component$<AccordionItemProps>((props) => {
  return (
    <QwikUIAccordionContent
      class={cn(
        "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        props.class
      )}
      {...props}
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
