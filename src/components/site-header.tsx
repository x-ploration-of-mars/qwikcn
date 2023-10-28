import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
// import { CommandMenu } from "~/components/command-menu";
import { Icons } from "~/components/icons";
import { MainNav } from "~/components/main-nav";
// import { MobileNav } from "~/components/mobile-nav";
// import { ModeToggle } from "~/components/mode-toggle";
import { buttonVariants } from "~/registry/new-york/ui/button";
import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
// import ModeToggle from "~/registry/new-york/examples/mode-toggle";

export const SiteHeader = component$(() => {
  return (
    <header class="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div class="container flex h-14 items-center">
        <MainNav />
        {/* <MobileNav /> */}
        <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div class="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
          </div>
          <nav class="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                class={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub class="h-4 w-4" />
                <span class="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                class={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.twitter class="h-4 w-4 fill-current" />
                <span class="sr-only">Twitter</span>
              </div>
            </Link>
            {/* <ModeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  );
});
