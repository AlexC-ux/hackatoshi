import React from "react";

import { Hint, HintMessage } from "entities/page-hint";
import { HintAction } from "features/page-hint";

export const PageHintWidget: React.FC = () => {
  return (
    <Hint
      messages={
        <>
          <HintMessage content="Привет! 👋" />
          <HintMessage content="Я Цифровой помощник. Готов ответить на все твои вопросы. Что привело тебя сюда?" />
        </>
      }
      actions={
        <>
          <HintAction
            id="action_1"
            content="Хочу узнать о том какие мероприятия проводятся"
          />
          <HintAction id="action_2" content="Хочу подать заявку на грант" />
          <HintAction id="action_3" content="Хочу узнать статус моей заявки" />
        </>
      }
    />
  );
};
