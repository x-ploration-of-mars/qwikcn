import { cn } from "~/lib/utils";
import { StyleSwitcher } from "~/components/style-switcher";
import { ThemeWrapper } from "~/components/theme-wrapper";
import {
  QwikIntrinsicElements,
  Slot,
  component$,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { Tab, TabList, TabPanel, Tabs } from "@qwik-ui/headless";
import { setHighlighter } from "~/lib/utils";

type ComponentPreviewProps = QwikIntrinsicElements["div"] & {
  align?: "center" | "start" | "end";
  code?: string;
  language?: "tsx" | "html" | "css";
};

export const ComponentPreview = component$<ComponentPreviewProps>(
  ({ align = "center", code, language = "tsx", ...props }) => {
    const highlighterSignal = useSignal<string>();

    useTask$(async function createHighlightedCode() {
      const highlighter = await setHighlighter();

      highlighterSignal.value = highlighter.codeToHtml(code || "", {
        lang: language,
      });
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
              {/* {extractedClassNames ? (
                <CopyWithClassNamesQwikified
                  value={codeString.value}
                  extractedClasses={extractedClassNames}
                />
              ) : (
                codeString.value && <CopyButton value={codeString.value} />
              )} */}
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
                <Slot name="preview" />
              </div>
            </ThemeWrapper>
          </TabPanel>
          <TabPanel>
            <div class="flex flex-col space-y-4">
              <div class="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                <div dangerouslySetInnerHTML={highlighterSignal.value} />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
);
