import { Slot, component$ } from "@builder.io/qwik";
import {
  Tab as QwikUITab,
  TabList as QwikUITabList,
  Tabs as QwikUITabs,
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
      class={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        props.class
      )}
      {...props}
    />
  );
});

const TabPanel = component$<TabPanelProps>((props) => {
  return (
    <QwikUITabPanel
      class={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        props.class
      )}
      {...props}
    >
      <Slot />
    </QwikUITabPanel>
  );
});

export { Tabs, TabList, Tab, TabPanel };
