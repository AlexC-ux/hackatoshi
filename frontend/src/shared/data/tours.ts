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
  "2": [
    {
      title: "Указать проект.",
      content: "Проект можно создать по во вкладке 'мои проекты'. Ссылка на вкладку: https://grants.myrosmol.ru/projects",
      selector: 'section > div:nth-child(1) > div > div > div.multiselect__tags',
      arrow: "bottom",
    },
    {
      title: "Указать номинацию",
      content: "Проекты могут участвовать в одной выбранной номинации. Выбирете Вашу.",
      selector: 'section > div:nth-child(2) > div > div > div.multiselect__tags',
      arrow: "bottom",
    },
    {
      title: "У нас есть образец документа",
      content: "Пример расположен здесь: https://ibb.co/6mvms1b Вы можете заполнить от руки и приложить скан.",
      selector: 'section > div > div.base-upload > div.base-upload__row > div.base-upload__area.base-file > button',
      arrow: "top",
    },
    {
      title: "У нас есть образец документа",
      content: "Пример расположен здесь: https://ibb.co/6mvms1b Вы можете заполнить от руки и приложить скан.",
      selector: 'form > div:nth-child(4) > section > div > div.base-upload > div.base-upload__row > div.base-upload__area.base-file > button',
      arrow: "top",
    },
    {
      title: "У нас есть образец документа",
      content: "Пример расположен здесь: https://ibb.co/6mvms1b Вы можете заполнить от руки и приложить скан.",
      selector: 'form > div:nth-child(5) > section > div > div.base-upload > div.base-upload__row > div.base-upload__area.base-file > button',
      arrow: "top",
    },
    {
      title: "У нас есть образец документа",
      content: "Пример расположен здесь: https://ibb.co/6mvms1b Вы можете заполнить от руки и приложить скан.",
      selector: 'form > div:nth-child(6) > section > div > div.base-upload > div.base-upload__row > div.base-upload__area.base-file > button',
      arrow: "top",
    },
    {
      title: "У нас есть образец документа",
      content: "Пример расположен здесь: https://ibb.co/6mvms1b Вы можете заполнить от руки и приложить скан.",
      selector: 'form > div:nth-child(7) > section > div > div.base-upload > div.base-upload__row > div.base-upload__area.base-file > button',
      arrow: "top",
    }
  ]
};
