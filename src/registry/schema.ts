import { type Input, array, enumType, object, optional, string } from "valibot";

export const registrySchema = array(
  object({
    name: string(),
    dependencies: optional(array(string())),
    registryDependencies: optional(array(string())),
    files: array(string()),
    type: enumType([
      "components:ui",
      "components:component",
      "components:example",
    ]),
  })
);

export type Registry = Input<typeof registrySchema>;
