import { SidebarNavItem } from "~/types/nav";

import { cn } from "~/lib/utils";
import { ContentMenu, useContent, useLocation } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

export type DocsSidebarNavProps = {
  items: SidebarNavItem[];
};

export const DocsSidebarNav = component$(() => {
  const { menu } = useContent();

  return menu?.items && menu.items[1]?.items?.length ? (
    <div class="w-full">
      {menu.items[1].items.map((item, index) => (
        <div key={index} class={cn("pb-4")}>
          <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {item.text}
          </h4>
          {item.items && item.items.length && (
            <DocsSidebarNavItems items={item.items} />
          )}
        </div>
      ))}
    </div>
  ) : null;
});

export const DocsSidebarNavItems = component$(
  ({ items }: { items: ContentMenu[] }) => {
    const location = useLocation();
    const isExternal = (item: ContentMenu) => {
      return item.href?.includes("https://");
    };

    return items.length ? (
      <div class="grid grid-flow-row auto-rows-max text-sm">
        {items.map((item, index) =>
          item.href ? (
            <a
              key={index}
              href={item.href}
              class={cn(
                "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                location.url.pathname === item.href
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
              target={isExternal(item) ? "_blank" : ""}
              rel={isExternal(item) ? "noreferrer" : ""}
            >
              {item.text}
            </a>
          ) : (
            <span
              key={index}
              class={cn(
                "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
              )}
            >
              {item.text}
            </span>
          )
        )}
      </div>
    ) : null;
  }
);
