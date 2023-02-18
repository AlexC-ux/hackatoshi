import { tourModel } from "entities/tour";

import styles from "./styles.module.scss";

export const TourPrevButton = () => {
  const { prevStep } = tourModel.provider.useTour();

  return (
    <button className={styles["tour-prev-button"]} onClick={() => prevStep()}>
      Назад
    </button>
  );
};
