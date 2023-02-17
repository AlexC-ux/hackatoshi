import styles from "./styles.module.scss";

export type HintMessageProps = {
  content: React.ReactNode;
};

export const HintMessage: React.FC<HintMessageProps> = ({ content }) => {
  return (
    <div className={styles["hint-message"]}>
      <span className={styles["hint-message__content"]}>{content}</span>
    </div>
  );
};
