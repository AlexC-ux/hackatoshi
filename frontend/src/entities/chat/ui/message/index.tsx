import classNames from "classnames";

import { IMessage } from "shared/types/message";

import styles from "./styles.module.scss";
import { chatModel } from "entities/chat";

export type MessageProps = {
  message: IMessage;
};

export const Message: React.FC<MessageProps> = ({ message }) => {
  const { instantResponse } = chatModel.provider.useChat();

  return (
    <div
      className={classNames(
        styles["message"],
        styles[`message--${message.from}`]
      )}
    >
      <div className={styles["message-block"]}>{message.text}</div>
      {message.from === "server" && message.actions && (
        <div className={styles["message-actions"]}>
          {message.actions.map((action) => (
            <div
              key={action.text}
              className={styles["message-actions__action"]}
              onClick={() => instantResponse(action.text, action.answer)}
            >
              {action.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
