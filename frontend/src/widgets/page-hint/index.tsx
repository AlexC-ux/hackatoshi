import React from "react";
// import styles from "../../features/page-hint/hint-action/styles.module.scss";
import { Hint, HintMessage, pageHintModel } from "entities/page-hint";
import { HintAction } from "features/page-hint";
// import { SpeechToText } from "recognition";
// import io from "socket.io-client";

// const socket = io("http://localhost:4000");

// console.log({ connected: socket.connected })

// var synth = window.speechSynthesis,
//   message = new SpeechSynthesisUtterance();
// message.lang = 'ru-RU';
// message.text = '';

// socket.on("lowActive",()=>{
//   alert("Возможно, вам будут полезны советы помощника, нажмите 'тур по странице' для подробностей")
// })

export const PageHintWidget: React.FC = () => {
  // const r = SpeechToText({
  //   onTextRecognized(text) {
  //     socket.emitWithAck("askText", text).then((r) => {
  //       if (r.length > 0) {
  //         message.text = r[0].answer;
  //         synth.speak(message);
  //       }
  //     })
  //   },
  //   onTranscriptChanged(transcript) {

  //   },
  //   onRecognitionNotSupported() {

  //   },
  // })

  // function recognizeText() {
  //   synth.cancel();
  //   if (r.microPermissionsGranted) {
  //     if (r.recognitionSupported) {
  //       r.start();
  //     } else {
  //       alert("Распознавание речи не поддерживается Вашим браузером!")
  //     }
  //   } else {
  //     alert("Необходимо предоставить разрешение к микрофону!")
  //   }
  // }

  const { messages, actions } = pageHintModel.provider.usePageHint();

  return (
    <>
      {/* <button onClick={recognizeText}
      className={styles["hint-action"]}
      style={{
        display: "block",
        marginLeft: "auto"
      }}>🎤</button> */}
      <Hint
        messages={messages.map((message) => (
          <HintMessage key={message} content={message} />
        ))}
        actions={actions.map((action) => (
          <HintAction key={action.id} id={action.id} content={action.title} />
        ))}
      />
    </>
  );
};
