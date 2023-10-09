// This util might not be needed. We should be able to call gtag directly in components


// import { Input, boolean, enumType, nullType, number, object, optional, parse, record, string, union } from "valibot"

// const eventSchema = object({
//   name: enumType([
//     "copy_npm_command",
//     "copy_usage_import_code",
//     "copy_usage_code",
//     "copy_primitive_code",
//     "copy_theme_code",
//   ]),
//   // declare type AllowedPropertyValues = string | number | boolean | null
//   properties: optional(record(union([string(), number(), boolean(), nullType()])))
// })

// export type Event = Input<typeof eventSchema>

// export function trackEvent(input: Event): void {
//   const event = parse(eventSchema, input)
//   if (event) {
//     window.gtag("event", "root_loaded");
//   }
// }