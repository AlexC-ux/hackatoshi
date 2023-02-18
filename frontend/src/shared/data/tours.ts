export type TourStep = {
  title: string;
  content: string;
  selector: string;
  arrow: string;
};

export const TOURS: Record<string, TourStep[]> = {
  "1": [
    {
      title: "Мероприятия",
      content: "Это мероприятия",
      selector: 'a[href*="/event"]',
      arrow: "left",
    },
    {
      title: "Мои проекты",
      content: "Это мои проекты",
      selector: 'a[href*="/projects"]',
      arrow: "left",
    },
    {
      title: "Помощь",
      content: "А это помощь",
      selector: 'a[href*="/help"]',
      arrow: "top",
    },
  ],
};
