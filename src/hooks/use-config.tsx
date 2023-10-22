import { useSignalWithStorage } from "./use-signal-with-storage";

import { Style } from "~/registry/styles";
import { Theme } from "~/registry/themes";

export type Config = {
  style: Style["name"];
  theme: Theme["name"];
  radius: number;
};
export const useConfig = () => {
  return useSignalWithStorage<Config>("config", {
    style: "new-york",
    theme: "zinc",
    radius: 0.5,
  });
};
