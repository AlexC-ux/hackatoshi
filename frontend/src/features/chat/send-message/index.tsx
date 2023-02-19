import { chatModel } from "entities/chat";
import sendIcon from "shared/assets/icons/send.svg";

import styles from "./styles.module.scss";

export const SendMessage = () => {
  const { sendMessage } = chatModel.provider.useChat();

  return (
    <img
      className={styles["send-message"]}
      src={sendIcon}
      alt="Отправить сообщение"
      onClick={() => sendMessage()}
    />
  );
};
