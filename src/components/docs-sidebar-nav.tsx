import { SidebarNavItem } from "~/types/nav";

import { cn } from "~/lib/utils";
import { Link, useLocation } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

export type DocsSidebarNavProps = {
  items: SidebarNavItem[];
};

export const DocsSidebarNav = component$(({ items }: DocsSidebarNavProps) => {
  const location = useLocation();

  return items.length ? (
    <div class="w-full">
      {items.map((item, index) => (
        <div key={index} class={cn("pb-4")}>
          <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {item.title}
          </h4>
          {item.items.length && (
            <DocsSidebarNavItems
              items={item.items}
              pathname={location.url.pathname}
            />
          )}
        </div>
      ))}
    </div>
  ) : null;
});

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items.length ? (
    <div class="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            class={cn(
              "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
              pathname === item.href
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
            {item.label && (
              <span class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={index}
            class={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
            {item.label && (
              <span class="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        )
      )}
    </div>
  ) : null;
}
