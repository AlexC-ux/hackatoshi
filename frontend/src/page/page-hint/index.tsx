import { useEffect } from "react";

import { PageHintWidget } from "widgets/page-hint";
import useElementSize from "shared/hooks/use-element-size";
import { pageHintModel } from "entities/page-hint";

import styles from "./styles.module.scss";

export const PageHintPage: React.FC = () => {
  const [ref, { height }] = useElementSize<HTMLElement>();

  useEffect(() => {
    if (window) {
      window.parent.postMessage(
        { type: "hint:height", value: height + 16 },
        "*"
      );
    }
  }, [height]);

  return (
    <pageHintModel.provider.PageHintProvider>
      <main ref={ref} className={styles["page-hint-page"]}>
        <PageHintWidget />
      </main>
    </pageHintModel.provider.PageHintProvider>
  );
};
