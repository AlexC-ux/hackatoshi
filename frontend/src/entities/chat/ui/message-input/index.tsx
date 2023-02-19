import { chatModel } from "entities/chat";
import styles from "./styles.module.scss";

export type MessageInputProps = {
  actions?: React.ReactNode;
};

export const MessageInput: React.FC<MessageInputProps> = ({ actions }) => {
  const { message, onChangeMessage } = chatModel.provider.useChat();

  return (
    <div className={styles["message-input"]}>
      <input
        className={styles["message-input__input"]}
        name="question"
        placeholder="Введите сообщение..."
        value={message}
        onChange={(e) => onChangeMessage(e.target.value)}
      />
      {actions && (
        <div className={styles["message-input__actions"]}>{actions}</div>
      )}
    </div>
  );
};
