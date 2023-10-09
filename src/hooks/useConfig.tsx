import { useSignalWithStorage } from "./useSignalWithStorage";

import { Style } from "~/registry/styles";
import { Theme } from "~/registry/themes";

export type Config = {
  style: Style["name"];
  theme: Theme["name"];
  radius: number;
};
export function useConfig() {
  return useSignalWithStorage<Config>("config", {
    style: "new-york",
    theme: "zinc",
    radius: 0.5,
  });
}
