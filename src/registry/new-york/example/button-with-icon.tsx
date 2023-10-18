import { LuMailOpen } from "@qwikest/icons/lucide";
import { Button } from "~/registry/new-york/ui/button";

export default function ButtonWithIcon() {
  return (
    <Button>
      <LuMailOpen class="mr-2 h-4 w-4" /> Login with Email
    </Button>
  );
}
