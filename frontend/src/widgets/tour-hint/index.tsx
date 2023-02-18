import { TourHint, TourHintArrow, tourModel } from "entities/tour";
import { TourCloseButton, TourNextButton, TourPrevButton } from "features/tour";

export const TourHintWidget = () => {
  const { tourStep } = tourModel.provider.useTour();

  if (!tourStep) return null;

  return (
    <TourHint
      title={tourStep.title}
      content={tourStep.content}
      closeButton={<TourCloseButton />}
      actions={
        <>
          <TourPrevButton />
          <TourNextButton />
        </>
      }
      arrow={tourStep.arrow as TourHintArrow}
    />
  );
};
