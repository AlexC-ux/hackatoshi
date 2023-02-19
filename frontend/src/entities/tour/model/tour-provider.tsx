import { createContext, useContext, useEffect, useState } from "react";
import { TOURS, TourStep } from "shared/data/tours";

export type TourContextType = {
  tour: TourStep[];
  tourStep: TourStep | null;
  step: number;
  hasNext: boolean;
  hasPrev: boolean;
  nextStep: () => void;
  prevStep: () => void;
  closeTour: () => void;
};

export const TourContext = createContext<TourContextType | null>(null);

export type TourProviderProps = React.PropsWithChildren & {
  tourId: string;
};

export const TourProvider: React.FC<TourProviderProps> = ({
  children,
  tourId,
}) => {
  const [tour, setTour] = useState<TourStep[]>([]);
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    setStep(0);
    setTour(TOURS[tourId]);
  }, [tourId]);

  useEffect(() => {
    const _tourStep = tour[step] ?? null;
    if (window && _tourStep) {
      window.parent.postMessage(
        {
          type: "tour:step",
          selector: _tourStep.selector,
          position: _tourStep.arrow,
        },
        "*"
      );
    }
  }, [step, tourId, tour]);

  const nextStep = () => {
    setStep((prevStep) =>
      prevStep + 1 < tour.length ? prevStep + 1 : prevStep
    );
  };

  const prevStep = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  const closeTour = () => {
    window.parent.postMessage(
      {
        type: "tour:end",
      },
      "*"
    );
  };

  const tourStep = tour[step] ?? null;

  const hasNext = step < tour.length - 1;
  const hasPrev = step > 0;

  return (
    <TourContext.Provider
      value={{
        tour,
        tourStep,
        step,
        nextStep,
        prevStep,
        closeTour,
        hasNext,
        hasPrev,
      }}
    >
      {children}
    </TourContext.Provider>
  );
};

export const useTour = () => {
  const context = useContext(TourContext);

  if (!context) throw Error("TourProvider required!");

  return context;
};
