import { component$ } from "@builder.io/qwik";
import { Label } from "~/registry/new-york/ui/label";
import { Textarea } from "~/registry/new-york/ui/textarea";

export default component$(() => {
  return (
    <div class="grid w-full gap-1.5">
      <Label for="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  );
});
