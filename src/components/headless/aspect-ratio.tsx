import {
  QwikIntrinsicElements,
  CSSProperties,
  component$,
  Slot,
} from "@builder.io/qwik";

type aspectRatioProps = Omit<QwikIntrinsicElements["div"], "style"> & {
  style?: CSSProperties | undefined;
} & { ratio?: number };

export const AspectRatio = component$<aspectRatioProps>(
  ({ ratio = 1 / 1, style, ...props }) => {
    return (
      <div
        style={{
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / ratio}%`,
        }}
      >
        <div
          {...props}
          style={{
            // ensures children expand in ratio
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...style,
          }}
        />
        <Slot />
      </div>
    );
  }
);
