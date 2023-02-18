import { TourHint } from "entities/tour";
import { TourCloseButton, TourNextButton, TourPrevButton } from "features/tour";

export const TourHintWidget = () => {
  return (
    <TourHint
      title="Заголовок"
      content="Описание тура хахах хах ах ах ах ах ха"
      closeButton={<TourCloseButton />}
      actions={
        <>
          <TourPrevButton />
          <TourNextButton />
        </>
      }
      arrow="left"
    />
  );
};
