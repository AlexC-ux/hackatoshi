import { chatModel } from "entities/chat";

import styles from "./styles.module.scss";

export const SendVoiceMessage = () => {
  const { recognizeText } = chatModel.provider.useChat();

  return (
    <button className={styles["send-voice-message"]} onClick={recognizeText}>
      🎤
    </button>
  );
};
