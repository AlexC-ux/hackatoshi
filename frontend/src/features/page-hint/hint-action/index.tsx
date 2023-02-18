import styles from "./styles.module.scss";

export type HintActionProps = {
  id: string;
  content: React.ReactNode;
};

export const HintAction: React.FC<HintActionProps> = ({ id, content }) => {
  const onClick = () => {
    if (window) {
      const idSplited = id.split(":");
      if (id != "tour:main") {
        if (idSplited[0] === "tour")
          window.parent.postMessage(
            { type: "tour:start", value: idSplited[1] },
            "*"
          );
      } else {
        window.parent.postMessage(
          { type: "tour:main", value: "" },
          "*"
        );
      }

    }
  };

  return (
    <button className={styles["hint-action"]} onClick={onClick}>
      {content}
    </button>
  );
};
