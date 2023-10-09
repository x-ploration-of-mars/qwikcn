import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  const documentReady = useSignal(false);

  useVisibleTask$(
    () => {
      documentReady.value = true;
    },
    { strategy: "document-idle" }
  );

  if (!documentReady.value) {
    return null;
  }
  return (
    <div class="m-8">
      <article class="cn-prose max-w-6xl">
        <Slot />
      </article>
    </div>
  );
});
