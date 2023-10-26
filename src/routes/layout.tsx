import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { MDXProvider } from "~/context/MDXProvider";

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

export const components = {
  h1: component$((props) => {
    return (
      <h1 {...props} class="text-blue-300">
        <Slot />
      </h1>
    );
  }),
  h2: component$((props) => {
    return (
      <h2 {...props} class="text-red-400">
        <Slot />
      </h2>
    );
  }),
};

export default component$(() => {
  return (
    <MDXProvider components={components}>
      <Slot />
    </MDXProvider>
  );
});
