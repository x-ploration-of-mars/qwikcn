import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/registry/new-york/ui/button";

export default component$(() => {
  return (
    <Button>
      <Link href="/login">Login</Link>
    </Button>
  );
});
