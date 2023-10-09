import { component$ } from "@builder.io/qwik";
import { useConfig } from "~/hooks/use-config";

export default component$(() => {
  const config = useConfig();

  return (
    <div>
      Hello 👋
      <br />
      <button
        onClick$={() =>
          (config.value = {
            ...config.value,
            theme: "rose",
          })
        }
      >
        {config.value.theme}
      </button>
    </div>
  );
});
