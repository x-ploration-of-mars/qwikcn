import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { Icons } from "~/components/icons";
import { Link, useLocation } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

export const MainNav = component$(() => {
  const location = useLocation();

  return (
    <div class="mr-4 hidden md:flex">
      <Link href="/" class="mr-6 flex items-center space-x-2">
        <Icons.logo class="h-6 w-6" />
        <span class="hidden font-bold sm:inline-block">{siteConfig.name}</span>
      </Link>
      <nav class="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/docs"
          class={cn(
            "transition-colors hover:text-foreground/80",
            location.url.pathname === "/docs/"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Documentation
        </Link>
        <Link
          href="/docs/components/accordion"
          class={cn(
            "transition-colors hover:text-foreground/80",
            location.url.pathname.startsWith("/docs/components/")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
        <Link
          href="/themes"
          class={cn(
            "transition-colors hover:text-foreground/80",
            location.url.pathname.startsWith("/themes/")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Themes
        </Link>
        <Link
          href="/examples"
          class={cn(
            "transition-colors hover:text-foreground/80",
            location.url.pathname.startsWith("/examples/")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Examples
        </Link>
        <Link
          href={siteConfig.links.github}
          class={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  );
});
