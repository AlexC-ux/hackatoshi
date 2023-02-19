import { createContext, useContext, useEffect, useRef, useState } from "react";
import { SpeechToText } from "recognition";
import { IMessage, IQuestion, IResponse } from "shared/types/message";
import { IQuestionResponse } from "shared/types/question-response";
import { io, Socket } from "socket.io-client";

export type ChatContextType = {
  socket: Socket;
  sendMessage: () => void;
  onChangeMessage: (message: string) => void;
  instantResponse: (question: string, response: string) => void;
  message: string;
  messages: IMessage[];
  recognizeText: () => void;
};

export const ChatContext = createContext<ChatContextType | null>(null);

export type ChatProviderProps = React.PropsWithChildren;

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const getSocket = () => {
    const _socket = io("http://localhost:4000");
    return _socket;
  };

  const socket = useRef<Socket>(getSocket());
  const lastMessage = useRef<string>("");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([]);

  const s2t = SpeechToText({
    onTextRecognized(text) {
      sendMessage(text);
    },
    onTranscriptChanged(transcript) {
      setMessage(transcript);
    },
    onRecognitionNotSupported() {},
  });

  const recognizeText = () => {
    if (!s2t.listening) {
      if (s2t.microPermissionsGranted) {
        if (s2t.recognitionSupported) {
          s2t.start();
        } else {
          alert("Распознавание речи не поддерживается Вашим браузером!");
        }
      } else {
        alert("Необходимо предоставить разрешение к микрофону!");
      }
    }
  };

  useEffect(() => {
    if (socket.current) socket.current.disconnect();
    socket.current = getSocket();

    return () => {
      socket.current.disconnect();
    };
  }, []);

  const showResponseToQuestion = (
    text: string,
    actions?: IQuestionResponse[]
  ) => {
    const newMessage: IResponse = {
      from: "server",
      text: text,
      actions,
    };
    setMessages((_messages) => [..._messages, newMessage]);
  };

  const onResponseQuestion = (response: IQuestionResponse[]) => {
    response = response.filter((res) => res.type === "question");

    if (response.length === 0) {
      showResponseToQuestion("Попробуйте задать вопрос иначе");
      return;
    }

    const exactQuestion = response.find(
      (res) => res.text.toLowerCase() === lastMessage.current.toLowerCase()
    );

    if (exactQuestion) {
      const otherQuestions = response.filter(
        (res) => res.text.toLowerCase() !== lastMessage.current.toLowerCase()
      );
      showResponseToQuestion(exactQuestion.answer, otherQuestions.slice(0, 3));
      return;
    }

    showResponseToQuestion("Возможно вы имели в виду:", response.slice(0, 3));
  };

  const sendMessage = (outerMessage?: string) => {
    console.log(outerMessage);
    const localMessage =
      outerMessage !== undefined ? outerMessage.trim() : message.trim();
    if (localMessage) {
      lastMessage.current = localMessage;
      const newMessage: IQuestion = {
        from: "user",
        text: lastMessage.current,
      };
      setMessages((_messages) => [..._messages, newMessage]);
      socket.current.emit("askText", lastMessage.current, onResponseQuestion);
      setMessage("");
    }
  };

  const instantResponse = (question: string, response: string) => {
    const newQuestion: IQuestion = {
      from: "user",
      text: question,
    };
    const newResponse: IResponse = {
      from: "server",
      text: response,
    };
    setMessages((_messages) => [..._messages, newQuestion, newResponse]);
  };

  return (
    <ChatContext.Provider
      value={{
        socket: socket.current,
        messages,
        sendMessage,
        message,
        onChangeMessage: setMessage,
        instantResponse,
        recognizeText,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);

  if (!context) throw Error("ChatProvider required!");

  return context;
};
