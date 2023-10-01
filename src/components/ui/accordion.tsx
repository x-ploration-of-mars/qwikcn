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
} from "@qwik-ui/headless";

import { LuChevronDown } from "@qwikest/icons/lucide";

const Accordion = QwikUIAccordionRoot;

const AccordionItem = component$<AccordionItemProps>((props) => {
  return (
    <QwikUIAccordionItem {...props} class={cn("border-b", props.class)}>
      <Slot />
    </QwikUIAccordionItem>
  );
});

const AccordionTrigger = component$<AccordionTriggerProps>((props) => {
  return (
    <QwikUIAccordionHeader class={cn("flex", props.class)}>
      <QwikUIAccordionTrigger
        {...props}
        class={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          props.class
        )}
      >
        <Slot />
        <LuChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
      </QwikUIAccordionTrigger>
    </QwikUIAccordionHeader>
  );
});

const AccordionContent = component$<AccordionItemProps>((props) => {
  return (
    <QwikUIAccordionContent
      {...props}
      class={cn(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
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
  AccordionTrigger,
  AccordionContent,
  LuChevronDown,
};
