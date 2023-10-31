import { component$ } from "@builder.io/qwik";
import { ContentMenu, useContent, useLocation } from "@builder.io/qwik-city";
import { LuChevronLeft, LuChevronRight } from "@qwikest/icons/lucide";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/registry/new-york/ui/button";

export const DocsPager = component$(() => {
  const { menu } = useContent();
  const location = useLocation();
  let flattenedMenu: ContentMenu[] = [];

  if (menu?.items && menu.items[1]?.items) {
    flattenedMenu = flattenMenu(menu.items[1].items);
  }

  const index = flattenedMenu.findIndex(
    (item) => item.href === location.url.pathname
  );

  const previousPage = index === 0 ? null : flattenedMenu[index - 1];
  const nextPage =
    index === flattenedMenu.length - 1 ? null : flattenedMenu[index + 1];

  return (
    <div class="flex flex-row items-center justify-between">
      {previousPage?.href && (
        <a
          href={previousPage.href}
          class={buttonVariants({ variant: "outline" })}
        >
          <LuChevronLeft class="mr-2 h-4 w-4" />
          {previousPage.text}
        </a>
      )}
      {nextPage?.href && (
        <a
          href={nextPage.href}
          class={cn(buttonVariants({ variant: "outline" }), "ml-auto")}
        >
          {nextPage.text}
          <LuChevronRight class="ml-2 h-4 w-4" />
        </a>
      )}
    </div>
  );
});

export function flattenMenu(menu: ContentMenu[]) {
  return menu.reduce<ContentMenu[]>((acc, section) => {
    return acc.concat(section.items || []);
  }, []);
}
