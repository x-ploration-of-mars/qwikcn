import { component$ } from "@builder.io/qwik";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/registry/new-york/ui/avatar-vanilla";

export default component$(() => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/maiieul.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
});
