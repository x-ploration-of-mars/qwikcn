import { DocsSidebarNav } from "~/components/docs-sidebar-nav";
import { ScrollArea } from "~/registry/new-york/ui/scroll-area-qwikified";
import { Slot, component$ } from "@builder.io/qwik";

import { MDXProvider } from "~/context/MDXProvider";
import { components } from "~/components/mdx-components";
import { useContent, useDocumentHead } from "@builder.io/qwik-city";
import { LuChevronRight } from "@qwikest/icons/lucide";
import { cn } from "~/lib/utils";
import { DocsPager } from "~/components/pager";
import { DashboardTableOfContents } from "~/components/toc";

import "~/mdx.css";

export default component$(() => {
  const { headings } = useContent();
  const head = useDocumentHead();
  const { title, meta } = head;
  // const location = useLocation();

  // const breadcrumbs = createBreadcrumbs(menu, location.url.pathname);

  const description = meta.find((m) => m.name === "description")?.content;

  return (
    <MDXProvider components={components}>
      <div class="border-b">
        <div class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
              <DocsSidebarNav />
            </ScrollArea>
          </aside>
          <div>
            <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
              <div class="mx-auto w-full min-w-0">
                <div class="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
                  <div class="overflow-hidden text-ellipsis whitespace-nowrap">
                    Docs
                  </div>
                  <LuChevronRight class="h-4 w-4" />
                  <div class="font-medium text-foreground">{title}</div>
                </div>
                <div class="space-y-2">
                  <h1
                    class={cn("scroll-m-20 text-4xl font-bold tracking-tight")}
                  >
                    {title}
                  </h1>
                  {description && (
                    <p class="text-lg text-muted-foreground">{description}</p>
                  )}
                </div>
                {/* {doc.radix ? (
                  <div class="flex items-center space-x-2 pt-4">
                    {doc.radix?.link && (
                      <Link
                        href={doc.radix.link}
                        target="_blank"
                        rel="noreferrer"
                        class={cn(badgeVariants({ variant: "secondary" }))}
                      >
                        <Icons.radix class="mr-1 h-3 w-3" />
                        Radix UI
                      </Link>
                    )}
                    {doc.radix?.api && (
                      <Link
                        href={doc.radix.api}
                        target="_blank"
                        rel="noreferrer"
                        class={cn(badgeVariants({ variant: "secondary" }))}
                      >
                        API Reference
                      </Link>
                    )}
                  </div>
                ) : null} */}
                <div class="pb-12 pt-8">
                  <article class="max-w-6xl">
                    <Slot />
                  </article>
                </div>
                <DocsPager />
              </div>
              {headings && (
                <div class="hidden text-sm xl:block">
                  <div class="sticky top-16 -mt-10 pt-4">
                    <ScrollArea className="pb-10">
                      <div class="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                        <DashboardTableOfContents headings={headings} />
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </MDXProvider>
  );
});
