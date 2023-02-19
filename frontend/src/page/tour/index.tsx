import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { TourHintWidget } from "widgets/tour-hint";
import useElementSize from "shared/hooks/use-element-size";

import styles from "./styles.module.scss";
import { tourModel } from "entities/tour";

export const TourPage = () => {
  const [ref, { height }] = useElementSize<HTMLElement>();
  const { tourId } = useParams();

  useEffect(() => {
    if (window && tourId) {
      window.parent.postMessage({ type: "tour:height", value: height + 16 }, "*");
    }
  }, [height, tourId]);

  if (!tourId) return null;

  return (
    <tourModel.provider.TourProvider tourId={tourId}>
      <main ref={ref} className={styles["tour-page"]}>
        <TourHintWidget />
      </main>
    </tourModel.provider.TourProvider>
  );
};
