import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export function SpeechToText(props: {
  onTextRecognized: (text: string) => any;
  onRecognitionNotSupported: () => any;
  onTranscriptChanged: (transcript: string) => any;
}) {
  const speechRecognitionSupported =
    SpeechRecognition.browserSupportsSpeechRecognition();

  const { finalTranscript, listening, interimTranscript } =
    useSpeechRecognition({ clearTranscriptOnListen: true });

  const [microPermissionAllowed, setMicroPermissionAllowed] = useState(false);

  const startListening = () => {
    if (!microPermissionAllowed) {
      navigator.mediaDevices.getUserMedia({ audio: true });
    } else {
      SpeechRecognition.startListening({
        continuous: false,
        language: "ru",
      });
    }
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  useEffect(() => {
    if (`${interimTranscript}` != "") {
      props.onTranscriptChanged(interimTranscript);
    }
  }, [interimTranscript]);

  useEffect(() => {
    if (finalTranscript != "") {
      console.log({ finalTranscript });
      props.onTextRecognized(finalTranscript);
    }
  }, [finalTranscript]);

  useEffect(() => {
    if (!speechRecognitionSupported) {
      props.onRecognitionNotSupported();
    }
  });

  useEffect(() => {
    if (speechRecognitionSupported) {
      (<any>navigator).permissions
        .query({ name: "microphone" })
        .then(function (permissionStatus: any) {
          if (permissionStatus.state != "prompt") {
            setMicroPermissionAllowed(permissionStatus.state == "granted");
          }

          permissionStatus.onchange = function () {
            setMicroPermissionAllowed(this.state == "granted");
          };
        });
    }
  });

  return {
    start: startListening,
    stop: stopListening,
    listening: listening,
    microPermissionsGranted: microPermissionAllowed,
    recognitionSupported: speechRecognitionSupported,
  };
}
