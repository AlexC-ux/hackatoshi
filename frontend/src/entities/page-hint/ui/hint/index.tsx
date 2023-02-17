import styles from "./styles.module.scss";

export type HintProps = {
  actions?: React.ReactNode;
  messages?: React.ReactNode;
};

export const Hint: React.FC<HintProps> = ({ actions, messages }) => {
  return (
    <div className={styles["hint"]}>
      {messages && <div className={styles["hint-body"]}>{messages}</div>}
      {actions && <div className={styles["hint-actions"]}>{actions}</div>}
    </div>
  );
};
