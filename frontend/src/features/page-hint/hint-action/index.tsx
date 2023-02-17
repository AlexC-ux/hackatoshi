import styles from "./styles.module.scss";

export type HintActionProps = {
  id: string;
  content: React.ReactNode;
};

export const HintAction: React.FC<HintActionProps> = ({ id, content }) => {
  return <button className={styles["hint-action"]}>{content}</button>;
};
