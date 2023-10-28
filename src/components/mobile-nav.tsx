import { docsConfig } from "~/config/docs";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { Icons } from "~/components/icons";
import { Button } from "~/registry/new-york/ui/button";
import { ScrollArea } from "~/registry/new-york/ui/scroll-area-qwikified";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~/registry/new-york/ui/sheet-react";
import { Slot, component$, useSignal } from "@builder.io/qwik";
import { Link, LinkProps, useNavigate } from "@builder.io/qwik-city";

export const MobileNav = component$(() => {
  const open = useSignal(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <ViewVerticalIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Icons.logo className="mr-2 h-4 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {docsConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                )
            )}
          </div>
          <div className="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item?.items?.length &&
                  item.items.map((item) => (
                    <React.Fragment key={item.href}>
                      {!item.disabled &&
                        (item.href ? (
                          <MobileLink
                            href={item.href}
                            onOpenChange={setOpen}
                            className="text-muted-foreground"
                          >
                            {item.title}
                          </MobileLink>
                        ) : (
                          item.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
});

interface MobileLinkProps extends LinkProps {
  onOpenChange$?: (open: boolean) => void;
}

const MobileLink = component$<MobileLinkProps>(
  ({ href, onOpenChange$, ...props }: MobileLinkProps) => {
    const nav = useNavigate();
    return (
      <Link
        href={href}
        onClick$={() => {
          nav(href?.toString());
          onOpenChange$?.(false);
        }}
        class={cn(props.class)}
        {...props}
      >
        <Slot />
      </Link>
    );
  }
);