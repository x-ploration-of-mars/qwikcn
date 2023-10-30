import { useSignal, useTask$ } from "@builder.io/qwik";

export function useMounted() {
  const mounted = useSignal(false);

  useTask$(() => {
    mounted.value = true;
  });

  return mounted;
}
