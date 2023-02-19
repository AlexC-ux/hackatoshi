import chatIcon from "shared/assets/icons/chat.svg";

import styles from "./styles.module.scss";

export const ChatButtonPage = () => {
  const toggleChat = () => {
    window &&
      window.parent.postMessage(
        {
          type: "chat:toggle",
        },
        "*"
      );
  };

  return (
    <div className={styles["chat-button"]} onClick={toggleChat}>
      <img className={styles["chat-button__img"]} src={chatIcon} alt="Чат" />
    </div>
  );
};
