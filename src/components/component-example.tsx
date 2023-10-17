import {
  QwikIntrinsicElements,
  Slot,
  component$,
  useSignal,
} from "@builder.io/qwik";
import { cn } from "~/lib/utils";
import { Tab, TabList, TabPanel, Tabs } from "~/registry/new-york/ui/tabs";
import { CopyButton } from "./copy-button";
import { CopyWithClassNamesQwikified } from "./copy-with-classnames-qwikified";

type ComponentExampleProps = QwikIntrinsicElements["div"] & {
  extractedClasses?: string;
  align?: "center" | "start" | "end";
};

const ComponentExample = component$(
  ({ extractedClasses, align = "center", ...props }: ComponentExampleProps) => {
    const codeSlotContainerRef = useSignal<HTMLDivElement>();
    console.log("codeSlotContainerRef", codeSlotContainerRef.value?.innerHTML);
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
                class="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Preview
              </Tab>
              <Tab
                value="code"
                class="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Code
              </Tab>
            </TabList>
            {extractedClasses ? (
              <CopyWithClassNamesQwikified
                value={codeString.value}
                extractedClasses={extractedClasses}
              />
            ) : (
              codeString.value && (
                <CopyButton
                  value={codeString.value}
                  class="absolute right-4 top-20"
                />
              )
            )}
          </div>
          <TabPanel label="preview" class="rounded-md border">
            <div
              class={cn("flex min-h-[350px] justify-center p-10", {
                "items-center": align === "center",
                "items-start": align === "start",
                "items-end": align === "end",
              })}
            >
              <Slot name="example" />
            </div>
          </TabPanel>
          <TabPanel label="code">
            <div class="flex flex-col space-y-4">
              <div
                ref={codeSlotContainerRef}
                class="w-full rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto"
              >
                <Slot name="code" />
              </div>
              <div class="rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                <Slot />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
);

export { ComponentExample };
