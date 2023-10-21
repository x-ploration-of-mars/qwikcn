import { component$ } from "@builder.io/qwik";
import { Input } from "~/registry/new-york/ui/input";

export default component$(() => {
  return <Input disabled type="email" placeholder="Email" />;
});
