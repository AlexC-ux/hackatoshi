import { Message, MessageInput, chatModel } from "entities/chat";
import { SendMessage, SendVoiceMessage } from "features/chat";

import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";

export const ChatWidget = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages } = chatModel.provider.useChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles["chat"]}>
      <div className={styles["chat-head"]}>Сообщения</div>
      <div className={styles["chat-messages"]}>
        <div className={styles["chat-messages__container"]}>
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className={styles["chat-input"]}>
        <MessageInput
          actions={
            <>
              <SendVoiceMessage />
              <SendMessage />
            </>
          }
        />
      </div>
    </div>
  );
};
