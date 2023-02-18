import { TourHintWidget } from "widgets/tour-hint";

import styles from "./styles.module.scss";
import useElementSize from "shared/hooks/use-element-size";
import { useEffect } from "react";

export const TourPage = () => {
  const [ref, { height }] = useElementSize();

  useEffect(() => {
    if (window) {
      console.log({ type: "tour:height", value: height });
      window.parent.postMessage({ type: "tour:height", value: height }, "*");
    }
  }, [height]);

  return (
    <main ref={ref} className={styles["tour-page"]}>
      <TourHintWidget />
    </main>
  );
};
