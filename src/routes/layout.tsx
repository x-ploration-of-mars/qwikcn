import {
  Component,
  QwikIntrinsicElements,
  Slot,
  component$,
} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { MDXProvider } from "~/context/MDXProvider";
import { cn } from "~/lib/utils";
import { Callout } from "~/components/callout";
import { ComponentExample } from "~/components/component-example";
import { ComponentPreview } from "~/components/component-preview";
import { ComponentSource } from "~/components/component-source";
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
import {
  TabListProps,
  TabPanelProps,
  TabProps,
  TabsProps,
} from "@qwik-ui/headless";
import { CodeBlockWrapper as CodeBlockWrapperBase } from "~/components/code-block-wrapper";
import { Link as LinkBase, LinkProps } from "@builder.io/qwik-city";
import { Style } from "~/registry/styles";
import { NpmCommands } from "~/types/unist";
import { StyleWrapper } from "~/components/style-wrapper";
import { CopyButton } from "~/components/copy-button";
import { CopyNpmCommandButtonQwikified } from "~/components/copy-npm-command-button";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const components: Record<string, Component<any>> = {
  h1: component$<QwikIntrinsicElements["h1"]>(({ ...props }) => (
    <h1
      {...props}
      class={cn(
        "font-heading mt-2 scroll-m-20 text-4xl font-bold",
        props.class
      )}
    >
      <Slot />
    </h1>
  )),
  h2: component$<QwikIntrinsicElements["h2"]>(({ ...props }) => (
    <h2
      {...props}
      class={cn(
        "font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
        props.class
      )}
    >
      <Slot />
    </h2>
  )),
  h3: component$<QwikIntrinsicElements["h3"]>(({ ...props }) => (
    <h3
      {...props}
      class={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        props.class
      )}
    >
      <Slot />
    </h3>
  )),
  h4: component$<QwikIntrinsicElements["h4"]>(({ ...props }) => (
    <h4
      {...props}
      class={cn(
        "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        props.class
      )}
    >
      <Slot />
    </h4>
  )),
  h5: component$<QwikIntrinsicElements["h5"]>(({ ...props }) => (
    <h5
      {...props}
      class={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        props.class
      )}
    >
      <Slot />
    </h5>
  )),
  h6: component$<QwikIntrinsicElements["h6"]>(({ ...props }) => (
    <h6
      {...props}
      class={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        props.class
      )}
    >
      <Slot />
    </h6>
  )),
  a: component$<QwikIntrinsicElements["a"]>(({ ...props }) => (
    <a
      {...props}
      class={cn("font-medium underline underline-offset-4", props.class)}
    >
      <Slot />
    </a>
  )),
  p: component$<QwikIntrinsicElements["p"]>(({ ...props }) => (
    <p
      {...props}
      class={cn("leading-7 [&:not(:first-child)]:mt-6", props.class)}
    >
      <Slot />
    </p>
  )),
  ul: component$<QwikIntrinsicElements["ul"]>(({ ...props }) => (
    <ul {...props} class={cn("my-6 ml-6 list-disc", props.class)}>
      <Slot />
    </ul>
  )),
  ol: component$<QwikIntrinsicElements["ol"]>(({ ...props }) => (
    <ol {...props} class={cn("my-6 ml-6 list-decimal", props.class)}>
      <Slot />
    </ol>
  )),
  li: component$<QwikIntrinsicElements["li"]>(({ ...props }) => (
    <li {...props} class={cn("mt-2", props.class)}>
      <Slot />
    </li>
  )),
  blockquote: component$<QwikIntrinsicElements["blockquote"]>(
    ({ ...props }) => (
      <blockquote
        {...props}
        class={cn("mt-6 border-l-2 pl-6 italic", props.class)}
      >
        <Slot />
      </blockquote>
    )
  ),
  img: component$<QwikIntrinsicElements["img"]>(({ alt, ...props }) => (
    <img
      {...props}
      width={props.width}
      height={props.height}
      class={cn("rounded-md", props.class)}
      alt={alt}
    />
  )) as Component<any>,
  hr: component$<QwikIntrinsicElements["hr"]>(({ ...props }) => (
    <hr {...props} class="my-4 md:my-8" />
  )) as Component<any>,
  table: component$<QwikIntrinsicElements["table"]>(({ ...props }) => (
    <div class="my-6 w-full overflow-y-auto">
      <table {...props} class={cn("w-full", props.class)}>
        <Slot />
      </table>
    </div>
  )),
  tr: component$<QwikIntrinsicElements["tr"]>(({ ...props }) => (
    <tr {...props} class={cn("m-0 border-t p-0 even:bg-muted", props.class)} />
  )),
  th: component$<QwikIntrinsicElements["th"]>(({ ...props }) => (
    <th
      {...props}
      class={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        props.class
      )}
    >
      <Slot />
    </th>
  )),
  td: component$<QwikIntrinsicElements["td"]>(({ ...props }) => (
    <td
      {...props}
      class={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        props.class
      )}
    >
      <Slot />
    </td>
  )),
  pre: component$<
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
            {...props}
            class={cn(
              "relative mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 px-2 py-4 dark:bg-zinc-900",
              props.class
            )}
          >
            <Slot />

            <CopyButton
              value={__rawString__ || ""}
              src={__src__}
              class={cn("absolute right-4 top-4 ", __withMeta__ && "top-16")}
            />

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
                  className={cn(
                    "absolute right-4 top-4",
                    __withMeta__ && "top-16"
                  )}
                />
              )}
          </pre>
        </StyleWrapper>
      );
    }
  ),
  code: component$<QwikIntrinsicElements["code"]>(({ ...props }) => {
    return (
      <code
        {...props}
        class={cn(
          "rounded px-[0.3rem] py-[0.2rem] font-mono text-sm",
          props.class
        )}
      >
        <Slot />
      </code>
    );
  }),
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  AspectRatio,
  Callout,
  ComponentExample,
  ComponentPreview,
  ComponentSource,
  CodeBlockWrapper: component$(({ ...props }) => {
    return <CodeBlockWrapperBase {...props} class="rounded-md border" />;
  }),
  Step: component$<QwikIntrinsicElements["h3"]>(({ ...props }) => {
    return (
      <h3
        class={cn(
          "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
          props.class
        )}
        {...props}
      >
        <Slot />
      </h3>
    );
  }),
  Steps: component$<QwikIntrinsicElements["div"]>(({ ...props }) => {
    return (
      <div
        class="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
        {...props}
      >
        <Slot />
      </div>
    );
  }),
  Tabs: component$<TabsProps>(({ ...props }) => {
    return (
      <TabsBase class={cn("relative mt-6 w-full", props.class)} {...props}>
        <Slot />
      </TabsBase>
    );
  }),
  TabList: component$<TabListProps>(({ ...props }) => {
    return (
      <TabListBase
        class={cn(
          "w-full justify-start rounded-none border-b bg-transparent p-0",
          props.class
        )}
        {...props}
      >
        <Slot />
      </TabListBase>
    );
  }),
  Tab: component$<TabProps>(({ ...props }) => {
    return (
      <TabBase
        class={cn(
          "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
          props.class
        )}
        {...props}
      >
        <Slot />
      </TabBase>
    );
  }),
  TabPanel: component$<TabPanelProps>(({ ...props }) => {
    return (
      <TabPanelBase
        class={cn(
          "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
          props.class
        )}
        {...props}
      >
        <Slot />
      </TabPanelBase>
    );
  }),
  Link: component$<LinkProps>(({ ...props }) => {
    return (
      <LinkBase
        class={cn("font-medium underline underline-offset-4", props.class)}
        {...props}
      >
        <Slot />
      </LinkBase>
    );
  }),
  LinkCard: component$<LinkProps>(({ ...props }) => {
    return (
      <LinkBase
        class={cn(
          "flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10",
          props.class
        )}
        {...props}
      >
        <Slot />
      </LinkBase>
    );
  }),
};

export default component$(() => {
  return (
    <MDXProvider components={components}>
      <Slot />
    </MDXProvider>
  );
});
