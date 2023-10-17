import {
  $,
  QwikIntrinsicElements,
  QwikUIEvent,
  Slot,
  component$,
  useSignal,
} from "@builder.io/qwik";

const ScrollArea = component$<QwikIntrinsicElements["div"]>(({ ...props }) => {
  const containerRef = useSignal<HTMLDivElement>();
  const scrollPosition = useSignal(0);

  const handleScroll = $((e: QwikUIEvent, currentTarget: HTMLDivElement) => {
    return (scrollPosition.value = currentTarget.scrollTop);
  });

  return (
    <div
      class={`relative overflow-hidden ${props.class}`}
      onScroll$={handleScroll}
      ref={containerRef}
      {...props}
    >
      <div class="h-full w-full rounded-[inherit]" onScroll$={handleScroll}>
        <Slot />
      </div>
      <ScrollBar
        scrollPosition={scrollPosition.value}
        containerRef={containerRef}
      />
    </div>
  );
});

type ScrollBarProps = QwikIntrinsicElements["div"] & {
  scrollPosition: number;
  containerRef: any;
};
const ScrollBar = component$<ScrollBarProps>(
  ({ scrollPosition, containerRef }) => {
    const totalHeight = containerRef.current?.scrollHeight || 0;
    const containerHeight = containerRef.current?.clientHeight || 0;
    const thumbHeight = (containerHeight / totalHeight) * containerHeight;

    return (
      <div
        class="flex touch-none select-none transition-colors w-2.5 border-l border-l-transparent p-[1px] h-full"
        style={{
          transform: `translateY(${(scrollPosition / totalHeight) * 100}%)`,
          height: thumbHeight,
        }}
      >
        <div class="relative rounded-full bg-border flex-1"></div>
      </div>
    );
  }
);

export { ScrollArea, ScrollBar };
