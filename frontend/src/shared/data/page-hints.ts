export const PAGE_HINTS = [
  {
    location: "https://grants.myrosmol.ru/",
    exact: true,
    messages: [
      "Привет! 👋 Я Цифровой помощник.",
      "Я помогу тебе освоиться на сайте и отвечу на все твои вопросы!",
    ],
    actions: [
      {
        title: "Тур по странице",
        id: "tour:main",
      },
      {
        title: "Как подать заявку на грант?",
        id: "tour:main-grant",
      },
      {
        title: "Хочу научиться запускать проекты!",
        id: "tour:academy",
      },
    ],
  },
  {
    location: "https://grants.myrosmol.ru/events",
    exact: true,
    messages: [
      "У нас подготовлено много интересных грантовых конкурсов! Желаете ознакомиться?",
    ],
    actions: [
      {
        title: "Тур по странице",
        id: "tour:events",
      },
    ],
  },
  {
    location: "https://grants.myrosmol.ru/events/",
    exact: false,
    messages: [
      "Интересный конкурс, не так ли? Давайте я помогу Вам с заполнением заявки на участие!",
    ],
    actions: [
      {
        title: "Тур по странице",
        id: "tour:event-details",
      },
      {
        title: "По какому шаблону создавать проект?",
        id: "tour:event-details-template",
      },
    ],
  },
  {
    location: "https://grants.myrosmol.ru/projects/create/",
    exact: false,
    messages: ["Новый проект? Здорово! Нужна моя помощь?"],
    actions: [
      {
        title: "Как правильно заполнить поля?",
        id: "tour:create-project",
      },
    ],
  },
  {
    location: "https://grants.myrosmol.ru/participants",
    exact: true,
    messages: ["Это ваши заявки на участие в мероприятиях и грантах. Нужна помощь?"],
    actions: [
      {
        title: "Тур по странице",
        id: "tour:participants",
      },
    ],
  },
  {
    location: "https://grants.myrosmol.ru/projects",
    exact: true,
    messages: ["Здесь находятся твои гранты."],
    actions: [
      {
        title: "Тур по странице",
        id: "tour:projects",
      },
    ],
  },
  {
    location: "https://grants.myrosmol.ru/help",
    exact: true,
    messages: ["Возникли проблемы или вопросы? Эта страница поможет разобраться!"],
    actions: [
      {
        title: "Тур по странице",
        id: "tour:help",
      },
    ],
  },
  {
    location: "https://grants.myrosmol.ru/articles",
    exact: true,
    messages: ["Нужны полезные статьи или какие-то документы?"],
    actions: [
      {
        title: "Тур по странице",
        id: "tour:articles",
      },
    ],
  },
];
