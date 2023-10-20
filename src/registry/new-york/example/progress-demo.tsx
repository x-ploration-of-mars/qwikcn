import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Progress } from "~/registry/new-york/ui/progress-qwikified";

export default component$(() => {
  const progress = useSignal(13);

  useTask$(({ track }) => {
    track(() => progress.value);
    const timer = setTimeout(() => (progress.value = 66), 500);
    return () => clearTimeout(timer);
  });

  return <Progress value={progress.value} className="w-[60%]" />;
});
