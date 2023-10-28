import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { siteConfig } from "~/config/site";

export const SiteFooter = component$(() => {
  return (
    <footer class="py-6 md:px-8 md:py-0">
      <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            class="font-medium underline underline-offset-4"
          >
            maiieul
          </Link>
          . The source code is available on{" "}
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            class="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
});
