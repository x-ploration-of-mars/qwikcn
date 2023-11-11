// import { component$ } from "@builder.io/qwik";

// import {
//   Separator as QwikUISeparator,
//   type SeparatorProps,
// } from "@qwik-ui/headless";
// import { cn } from "~/lib/utils";

// const Separator = component$<SeparatorProps>(
//   ({ orientation = "horizontal", decorative = true, ...props }) => {
//     return (
//       <>
//         <QwikUISeparator
//           {...props}
//           decorative={decorative}
//           orientation={orientation}
//           class={cn(
//             "shrink-0 bg-border",
//             orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
//             props.class
//           )}
//         />
//       </>
//     );
//   }
// );

// export { Separator };

import { component$ } from "@builder.io/qwik";

export const Separator = component$(() => {
  return <div class="h-px w-full bg-border"></div>;
});
