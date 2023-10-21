import { component$ } from "@builder.io/qwik";
import { ScrollArea } from "~/registry/new-york/ui/scroll-area-qwikified";
import { Separator } from "~/registry/new-york/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default component$(() => {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div class="p-4">
        <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} class="text-sm">
              {tag}
            </div>
            <Separator class="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
});
