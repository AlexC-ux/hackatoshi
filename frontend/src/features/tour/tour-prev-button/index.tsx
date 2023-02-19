import classNames from "classnames";

import { tourModel } from "entities/tour";

import styles from "./styles.module.scss";

export const TourPrevButton = () => {
  const { prevStep, hasPrev } = tourModel.provider.useTour();

  return (
    <button
      className={classNames(styles["tour-prev-button"], {
        [styles["tour-prev-button--hidden"]]: !hasPrev,
      })}
      onClick={() => prevStep()}
    >
      Назад
    </button>
  );
};
