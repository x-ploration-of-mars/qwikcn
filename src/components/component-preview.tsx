import { Index } from "~/__registry__";
import { cn } from "~/lib/utils";
import { useConfig } from "~/hooks/use-config";
import { CopyButton } from "~/components/copy-button";
import { CopyWithClassNamesQwikified } from "./copy-with-classnames";
import { StyleSwitcher } from "~/components/style-switcher";
import { ThemeWrapper } from "~/components/theme-wrapper";
import { Tabs, TabPanel, TabList, Tab } from "~/registry/new-york/ui/tabs";
import {
  QwikIntrinsicElements,
  Slot,
  component$,
  useSignal,
} from "@builder.io/qwik";

type ComponentPreviewProps = QwikIntrinsicElements["div"] & {
  name: string;
  extractedClassNames?: string;
  align?: "center" | "start" | "end";
};

export const ComponentPreview = component$<ComponentPreviewProps>(
  ({
    name,
    extractedClassNames,
    align = "center",
    ...props
  }: ComponentPreviewProps) => {
    const config = useConfig();

    const Preview = Index[config.value.style][name]?.component ?? (
      <p class="text-sm text-muted-foreground">
        Component{" "}
        <code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {name}
        </code>{" "}
        not found in registry.
      </p>
    );

    const codeSlotContainerRef = useSignal<HTMLDivElement>();
    const codeString = useSignal(codeSlotContainerRef.value?.innerHTML || "");

    return (
      <div
        class={cn("group relative my-4 flex flex-col space-y-2", props.class)}
        {...props}
      >
        <Tabs class="relative mr-auto w-full">
          <div class="flex items-center justify-between pb-3">
            <TabList class="w-full justify-start rounded-none border-b bg-transparent p-0">
              <Tab
                value="preview"
                class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Preview
              </Tab>
              <Tab
                value="code"
                class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Code
              </Tab>
            </TabList>
          </div>
          <TabPanel class="relative rounded-md border">
            <div class="flex items-center justify-between p-4">
              <StyleSwitcher />
              {extractedClassNames ? (
                <CopyWithClassNamesQwikified
                  value={codeString.value}
                  classNames={extractedClassNames}
                />
              ) : (
                codeString.value && <CopyButton value={codeString.value} />
              )}
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
                {Preview}
              </div>
            </ThemeWrapper>
          </TabPanel>
          <TabPanel>
            <div class="flex flex-col space-y-4">
              <div
                ref={codeSlotContainerRef}
                class="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto"
              >
                <Slot name="code" />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
);
