import { cn } from "~/lib/utils";
import { StyleSwitcher } from "~/components/style-switcher";
import { ThemeWrapper } from "~/components/theme-wrapper";
import {
  Component,
  QwikIntrinsicElements,
  component$,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { Tab, TabList, TabPanel, Tabs } from "@qwik-ui/headless";
import { setHighlighter } from "~/lib/utils";
import { CopyButton } from "./copy-button";
import { useConfig } from "~/hooks/use-config";

const components = import.meta.glob("/src/registry/new-york/examples/*", {
  import: "default",
});

const componentsRaw = import.meta.glob("/src/registry/new-york/examples/*", {
  as: "raw",
});

type ComponentPreviewProps = QwikIntrinsicElements["div"] & {
  name: string;
  align?: "center" | "start" | "end";
  language?: "tsx" | "html" | "css";
};

export const ComponentPreview = component$<ComponentPreviewProps>(
  ({ name, align = "center", language = "tsx", ...props }) => {
    const config = useConfig();
    const highlighterSignal = useSignal<string>();

    const componentPath = `/src/registry/${config.value.style}/examples/${name}.tsx`;

    const Component = useSignal<Component<any>>();
    const ComponentRaw = useSignal<string>();

    useTask$(async () => {
      const highlighter = await setHighlighter();

      Component.value = (await components[componentPath]()) as Component<any>;
      ComponentRaw.value = (await componentsRaw[componentPath]()) as string;

      highlighterSignal.value = highlighter.codeToHtml(
        ComponentRaw.value || "",
        {
          lang: language,
        }
      );
    });

    return (
      <div
        class={cn("group relative my-4 flex flex-col space-y-2", props.class)}
        {...props}
      >
        <Tabs class="relative mr-auto w-full">
          <TabList class="w-full justify-start rounded-none border-b bg-transparent p-0">
            <Tab class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none">
              Preview
            </Tab>
            <Tab class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none">
              Code
            </Tab>
          </TabList>
          <TabPanel class="relative rounded-md border">
            <div class="flex items-center justify-between p-4">
              <StyleSwitcher />
            </div>
            <ThemeWrapper defaultTheme="zinc">
              <div
                class={cn(
                  "preview flex min-h-[350px] w-full justify-center p-10",
                  {
                    "items-center": align === "center",
                    "items-start": align === "start",
                    "items-end": align === "end",
                  }
                )}
              >
                {Component.value && <Component.value />}
              </div>
            </ThemeWrapper>
          </TabPanel>
          <TabPanel class="border-none relative">
            <CopyButton
              value={ComponentRaw.value || ""}
              class={cn("absolute right-6 top-4")}
            />
            <div class="flex flex-col space-y-4">
              <div class="w-full [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                <div dangerouslySetInnerHTML={highlighterSignal.value} />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
);
