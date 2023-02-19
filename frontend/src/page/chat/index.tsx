import { ChatWidget } from "widgets/chat";
import { chatModel } from "entities/chat";

import styles from "./styles.module.scss";

export const ChatPage: React.FC = () => {
  return (
    <chatModel.provider.ChatProvider>
      <main className={styles["chat-page"]}>
        <ChatWidget />
      </main>
    </chatModel.provider.ChatProvider>
  );
};
