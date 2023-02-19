import classNames from "classnames";

import { tourModel } from "entities/tour";

import styles from "./styles.module.scss";

export const TourNextButton = () => {
  const { nextStep, hasNext } = tourModel.provider.useTour();

  return (
    <button
      className={classNames(styles["tour-next-button"], {
        [styles["tour-next-button--hidden"]]: !hasNext,
      })}
      onClick={() => nextStep()}
    >
      Далее
    </button>
  );
};
