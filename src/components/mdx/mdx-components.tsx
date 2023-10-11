import { NpmCommands } from "~/types/unist";

import { cn } from "~/lib/utils";
import { Callout } from "~/components/callout";
import { ComponentExample } from "~/components/component-example";
import { ComponentPreview } from "~/components/component-preview";
import { ComponentSource } from "~/components/component-source";
import { CopyButton } from "~/components/copy-button";
import { CopyNpmCommandButtonQwikified } from "../copy-npm-command-button";
import { StyleWrapper } from "~/components/style-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/registry/new-york/ui/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "~/registry/new-york/ui/alert";
import { AspectRatio } from "~/components/headless/aspect-ratio";
import {
  Tabs as TabsBase,
  TabPanel as TabPanelBase,
  TabList as TabListBase,
  Tab as TabBase,
} from "~/registry/new-york/ui/tabs";

import { QwikIntrinsicElements, component$ } from "@builder.io/qwik";
import {
  TabListProps,
  TabPanelProps,
  TabProps,
  TabsProps,
} from "@qwik-ui/headless";
import { Style } from "~/registry/styles";
import { CodeBlockWrapper as CodeBlockWrapperBase } from "~/components/code-block-wrapper";
import { Link as LinkBase, LinkProps } from "@builder.io/qwik-city";

const Code = component$<QwikIntrinsicElements["code"]>(({ ...props }) => {
  return (
    <code
      class={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        props.class
      )}
      {...props}
    />
  );
});

const CodeBlock = component$<
  QwikIntrinsicElements["pre"] & {
    __style__?: Style["name"];
    __rawString__?: string;
    __withMeta__?: boolean;
    __src__?: string;
  } & NpmCommands
>(
  ({
    __rawString__,
    __npmCommand__,
    __yarnCommand__,
    __pnpmCommand__,
    __bunCommand__,
    __withMeta__,
    __src__,
    __style__,
    ...props
  }) => {
    return (
      <StyleWrapper styleName={__style__}>
        <pre
          class={cn(
            "mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900",
            props.class
          )}
          {...props}
        />
        {__rawString__ && !__npmCommand__ && (
          <CopyButton
            value={__rawString__}
            src={__src__}
            class={cn("absolute right-4 top-4", __withMeta__ && "top-16")}
          />
        )}
        {__npmCommand__ &&
          __yarnCommand__ &&
          __pnpmCommand__ &&
          __bunCommand__ && (
            <CopyNpmCommandButtonQwikified
              commands={{
                __npmCommand__,
                __yarnCommand__,
                __pnpmCommand__,
                __bunCommand__,
              }}
              className={cn("absolute right-4 top-4", __withMeta__ && "top-16")}
            />
          )}
      </StyleWrapper>
    );
  }
);

const CodeBlockWrapper = component$(({ ...props }) => {
  return <CodeBlockWrapperBase class="rounded-md border" {...props} />;
});

const Step = component$<QwikIntrinsicElements["h3"]>(({ ...props }) => {
  return (
    <h3
      class={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        props.class
      )}
      {...props}
    />
  );
});

const Steps = component$<QwikIntrinsicElements["div"]>(({ ...props }) => {
  return (
    <div
      class="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
      {...props}
    />
  );
});

const Tabs = component$<TabsProps>(({ ...props }) => {
  return (
    <TabsBase class={cn("relative mt-6 w-full", props.class)} {...props} />
  );
});

const TabList = component$<TabListProps>(({ ...props }) => {
  return (
    <TabListBase
      class={cn(
        "w-full justify-start rounded-none border-b bg-transparent p-0",
        props.class
      )}
      {...props}
    />
  );
});

const Tab = component$<TabProps>(({ ...props }) => {
  return (
    <TabBase
      class={cn(
        "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
        props.class
      )}
      {...props}
    />
  );
});

const TabPanel = component$<TabPanelProps>(({ ...props }) => {
  return (
    <TabPanelBase
      class={cn(
        "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
        props.class
      )}
      {...props}
    />
  );
});

const Link = component$<LinkProps>(({ ...props }) => {
  return (
    <LinkBase
      class={cn("font-medium underline underline-offset-4", props.class)}
      {...props}
    />
  );
});

const LinkedCard = component$<LinkProps>(({ ...props }) => {
  return (
    <LinkBase
      class={cn(
        "flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10",
        props.class
      )}
      {...props}
    />
  );
});

export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  AspectRatio,
  Callout,
  Code,
  CodeBlock,
  CodeBlockWrapper,
  ComponentExample,
  ComponentPreview,
  ComponentSource,
  Step,
  Steps,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Link,
  LinkedCard,
};
