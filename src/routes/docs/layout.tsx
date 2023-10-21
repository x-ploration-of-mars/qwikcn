import { docsConfig } from "~/config/docs";
import { DocsSidebarNav } from "~/components/docs-sidebar-nav";
import { ScrollArea } from "~/registry/new-york/ui/scroll-area-qwikified";
import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="border-b">
      <div class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        <div>
          <article class="cn-prose max-w-6xl">
            <Slot />
          </article>
        </div>
      </div>
    </div>
  );
});
