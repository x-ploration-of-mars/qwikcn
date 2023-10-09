import { Signal, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { isBrowser } from "@builder.io/qwik/build";

export function useSignalWithStorage<T>(
  key: string,
  defaultValue: T
): Signal<T> {
  const item = useSignal<T>(defaultValue);

  useVisibleTask$(
    () => {
      const lValue = localStorage.getItem(key);
      if (lValue) {
        item.value = JSON.parse(lValue);
      }
    },
    { strategy: "document-ready" }
  );

  useTask$(({ track }) => {
    track(() => item.value);
    if (isBrowser) {
      localStorage.setItem(key, JSON.stringify(item.value));
    }
  });

  return item;
}
