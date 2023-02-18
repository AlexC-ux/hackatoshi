import { tourModel } from "entities/tour";

import styles from "./styles.module.scss";

export const TourNextButton = () => {
  const { nextStep } = tourModel.provider.useTour();

  return (
    <button className={styles["tour-next-button"]} onClick={() => nextStep()}>
      Далее
    </button>
  );
};
