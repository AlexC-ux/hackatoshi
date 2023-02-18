import closeIcon from "shared/assets/icons/close.svg";
import { tourModel } from "entities/tour";

import styles from "./styles.module.scss";

export const TourCloseButton = () => {
  const { closeTour } = tourModel.provider.useTour();

  return (
    <img
      className={styles["tour-close-button"]}
      src={closeIcon}
      alt="Закрыть"
      role="button"
      onClick={() => closeTour()}
    />
  );
};
