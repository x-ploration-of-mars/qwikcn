import { Slot, component$ } from "@builder.io/qwik";
import {
  Tabs as QwikUITabs,
  TabList as QwikUITabList,
  Tab as QwikUITab,
  TabPanel as QwikUITabPanel,
  type TabProps,
  type TabPanelProps,
  type TabListProps,
} from "@qwik-ui/headless";
import { cn } from "~/lib/utils";

const Tabs = QwikUITabs;

const TabList = component$<TabListProps>((props) => {
  return (
    <QwikUITabList
      {...props}
      class={cn(
        "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        props.class
      )}
    >
      <Slot />
    </QwikUITabList>
  );
});

const Tab = component$<TabProps>((props) => {
  return (
    <QwikUITab
      {...props}
      class={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        props.class
      )}
    >
      <Slot />
    </QwikUITab>
  );
});

const TabPanel = component$<TabPanelProps>((props) => {
  return (
    <QwikUITabPanel
      {...props}
      class={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        props.class
      )}
    >
      <Slot />
    </QwikUITabPanel>
  );
});

export { Tabs, TabList, Tab, TabPanel };
