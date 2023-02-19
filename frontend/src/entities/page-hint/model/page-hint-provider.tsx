import { createContext, useContext, useEffect, useState } from "react";
import { PAGE_HINTS } from "shared/data/page-hints";
import useEventListener from "shared/hooks/use-event-listner";

export type PageHintContextType = {
  messages: string[];
  actions: { title: string; id: string }[];
};

export const PageHintContext = createContext<PageHintContextType | null>(null);

export type PageHintProviderProps = React.PropsWithChildren;

export const PageHintProvider: React.FC<PageHintProviderProps> = ({ children }) => {
  const [page, setPage] = useState("");

  useEventListener("message", ({ data }) => {
    if (data) {
      if (data.type === "location:changed") {
        setPage(data.location);
      }
    }
  });

  const hintData = PAGE_HINTS.find((pageHint) =>
    pageHint.exact
      ? page === pageHint.location
      : page.startsWith(pageHint.location)
  );

  return (
    <PageHintContext.Provider
      value={{
        messages: hintData?.messages ?? [],
        actions: hintData?.actions ?? [],
      }}
    >
      {children}
    </PageHintContext.Provider>
  );
};

export const usePageHint = () => {
  const context = useContext(PageHintContext);

  if (!context) throw Error("PageHintProvider required!");

  return context;
};
