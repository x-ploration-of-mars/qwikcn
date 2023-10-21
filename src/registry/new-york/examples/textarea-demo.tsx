import { component$ } from "@builder.io/qwik";
import { Textarea } from "~/registry/new-york/ui/textarea";

export default component$(() => {
  return <Textarea placeholder="Type your message here." />;
});
