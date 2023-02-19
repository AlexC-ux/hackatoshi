import { useLayoutEffect, useMemo, useState } from "react";

export type useElementSizeRect = Pick<
  DOMRectReadOnly,
  "x" | "y" | "top" | "left" | "right" | "bottom" | "height" | "width"
>;
export type useElementSizeRef<E extends Element = Element> = (
  element: E
) => void;
export type useElementSizeResult<E extends Element = Element> = [
  useElementSizeRef<E>,
  useElementSizeRect
];

const defaultState: useElementSizeRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

function useElementSize<
  E extends Element = Element
>(): useElementSizeResult<E> {
  const [element, ref] = useState<E | null>(null);
  const [rect, setRect] = useState<useElementSizeRect>(defaultState);

  const observer = useMemo(
    () =>
      new window.ResizeObserver((entries) => {
        if (entries[0]) {
          const { x, y, width, height, top, left, bottom, right } =
            entries[0].contentRect;
          setRect({ x, y, width, height, top, left, bottom, right });
        }
      }),
    []
  );

  useLayoutEffect(() => {
    if (!element) return;
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [element]);

  return [ref, rect];
}

export default typeof window.ResizeObserver !== "undefined"
  ? useElementSize
  : ((() => [() => {}, defaultState]) as typeof useElementSize);
