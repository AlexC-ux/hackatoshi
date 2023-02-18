import classNames from "classnames";

import styles from "./styles.module.scss";

export type TourHintArrow = "bottom" | "top" | "left" | "right";

export type TourHintProps = {
  title?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  closeButton?: React.ReactNode;
  arrow?: TourHintArrow;
};

export const TourHint: React.FC<TourHintProps> = ({
  title,
  content,
  actions,
  closeButton,
  arrow,
}) => {
  return (
    <div className={styles["tour-hint"]}>
      <div className={styles["tour-hint__header"]}>
        <div className={styles["tour-hint__header-title"]}>{title}</div>
        {closeButton && (
          <div className={styles["tour-hint__header-title"]}>{closeButton}</div>
        )}
      </div>
      {content && <div className={styles["tour-hint__content"]}>{content}</div>}
      {actions && <div className={styles["tour-hint__actions"]}>{actions}</div>}
      {arrow && (
        <div
          className={classNames(
            styles["tour-hint__arrow"],
            styles[`tour-hint__arrow--${arrow}`]
          )}
        />
      )}
    </div>
  );
};
