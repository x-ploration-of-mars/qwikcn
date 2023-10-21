/** @jsxImportSource react */
import * as React from "react";
import { DropdownMenuTriggerProps } from "@radix-ui/react-dropdown-menu";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";

import { cn } from "~/lib/utils";
import { Button } from "~/registry/new-york/ui/button-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/registry/new-york/ui/dropdown-menu-react";
import { qwikify$ } from "@builder.io/qwik-react";
import { copyToClipboardWithMeta } from "./copy-button";

interface CopyWithClassNamesProps extends DropdownMenuTriggerProps {
  value: string;
  extractedClasses: string;
  className?: string;
}

function CopyWithClassNames({
  value,
  extractedClasses,
  className,
}: CopyWithClassNamesProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const copyToClipboard = React.useCallback((value: string) => {
    copyToClipboardWithMeta(value);
    setHasCopied(true);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
            className
          )}
        >
          {hasCopied ? (
            <CheckIcon className="h-3 w-3" />
          ) : (
            <CopyIcon className="h-3 w-3" />
          )}
          <span className="sr-only">Copy</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => copyToClipboard(value)}>
          Component
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => copyToClipboard(extractedClasses)}>
          Classname
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const CopyWithClassNamesQwikified = qwikify$(CopyWithClassNames, {
  eagerness: "hover",
});

export { CopyWithClassNamesQwikified };
