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
            id="tour:1"
            content="Тур по странице"
          />
        </>
      }
    />
  );
};
