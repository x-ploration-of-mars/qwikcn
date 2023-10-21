import { $, QRL, useStore, useVisibleTask$ } from "@builder.io/qwik";

export type Store<T> = {
  item: T;
  setItem: QRL<(this: Store<T>, item: T) => void>;
};

export type ReadonlyStore<T> = {
  readonly item: T;
  setItem: QRL<(this: Store<T>, item: T) => void>;
};

export function useStoreWithStorage<T>(
  key: string,
  defaultValue: T
): ReadonlyStore<T> {
  const store = useStore<Store<T>>({
    item: defaultValue,
    setItem: $(function (this: Store<T>, item: T) {
      localStorage.setItem(key, JSON.stringify(item));
      this.item = item;
    }),
  });
  useVisibleTask$(() => {
    store.item = localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key)!)
      : defaultValue;
  });

  return store;
}
