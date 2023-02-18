import closeIcon from "shared/assets/icons/close.svg";

import styles from "./styles.module.scss";

export const TourCloseButton = () => {
  return (
    <img
      className={styles["tour-close-button"]}
      src={closeIcon}
      alt="Закрыть"
      role="button"
    />
  );
};
