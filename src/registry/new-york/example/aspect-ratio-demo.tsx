import { component$ } from "@builder.io/qwik";
import { AspectRatio } from "~/registry/new-york/ui/aspect-ratio";

export default component$(() => {
  return (
    <AspectRatio ratio={16 / 9} class="bg-muted">
      <img
        width={800}
        height={600}
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        class="rounded-md object-cover"
      />
    </AspectRatio>
  );
});
