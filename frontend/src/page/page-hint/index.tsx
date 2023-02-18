import React, { useEffect } from "react";

import { PageHintWidget } from "widgets/page-hint";
import useElementSize from "shared/hooks/use-element-size";

import styles from "./styles.module.scss";

export const PageHintPage: React.FC = () => {
  const [ref, { height }] = useElementSize();

  useEffect(() => {
    if (window) {
      console.log({ type: "hint:height", value: height });
      window.parent.postMessage({ type: "hint:height", value: height }, "*");
    }
  }, [height]);

  return (
    <main ref={ref} className={styles["page-hint-page"]}>
      <PageHintWidget />
    </main>
  );
};
