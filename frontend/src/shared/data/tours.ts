export type TourStep = {
  title: string;
  content: string;
  selector: string;
  arrow: string;
};
/**
 * ">": [
    {
      title: "",
      content: "",
      selector: '',
      arrow: "",
    },
  ]
 */
export const TOURS: Record<string, TourStep[]> = {
  ">": [
    {
      title: "Здесь можно выбрать регион",
      content: "Или нажмите на карте",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > div > section > article > div > div.regions-map_controls_PjKlD > div.base-select.base-field.base-field--animated.regions-map_select_2qwAE > div > div > div.multiselect__tags',
      arrow: "top",
    },
    {
      title: "Эта кнопка прзволяет приближать карту",
      content: "а рядом есть кнопка для отдаления",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > div > section > article > div > div.regions-map_controls_PjKlD > div.regions-map_buttons_5NlGJ > button > span > div > svg',
      arrow: "right",
    },
    {
      title: "Здесь есть ответы",
      content: "на частозадаваемые вопросы",
      selector: '#app > div.app-layout_wrapper_35RWz > div > header > nav > a:nth-child(2) > span',
      arrow: "top",
    },
    {
      title: "Инструкции в базе знаний",
      content: "научат Вас пользоваться площадкой",
      selector: '#app > div.app-layout_wrapper_35RWz > div > header > nav > a:nth-child(3)',
      arrow: "top",
    },
    {
      title: "Страница Академии.Гранты",
      content: "научит запускать масштабные проекты",
      selector: '#app > div.app-layout_wrapper_35RWz > div > header > nav > a:nth-child(4) > span',
      arrow: "top",
    },
    {
      "title": "Мероприятия",
      "content": "Здесь находится информация о проводимых мероприятиях и грантах",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > aside > div > nav > a:nth-child(1)",
      "arrow": "left"
    },
    {
      "title": "Проекты",
      "content": "Здесь находится информация ваших актуальных проектах",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > aside > div > nav > a:nth-child(2)",
      "arrow": "left"
    },
    {
      "title": "Архив",
      "content": "Здесь находится информация ваших неактуальных проектах",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > aside > div > nav > a:nth-child(3)",
      "arrow": "left"
    },
    {
      "title": "Заявки",
      "content": "Здесь находится информация ваших заявках на участие в проекте",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > aside > div > nav > a:nth-child(4)",
      "arrow": "left"
    },
    {
      "title": "Грантовые соглашения",
      "content": "Здесь находится информация ваших грантовых соглашениях",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > aside > div > nav > a:nth-child(5)",
      "arrow": "left"
    },
    {
      "title": "Отчеты",
      "content": "Здесь находятся ваши отчеты",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > aside > div > nav > a:nth-child(6)",
      "arrow": "left"
    },
  ],
  ">events>c490a68f-9354-40b0-8f81-61978d48ccff": [
    {
      "title": "Организатор",
      "content": "Информация об организаторе мероприятия",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > section > section > aside > dl:nth-child(2) > dd > div:nth-child(1)",
      "arrow": "left",
    },
    {
      "title": "Даты",
      "content": "Даты проведения мероприятия",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > section > section > aside > dl:nth-child(3)",
      "arrow": "left",
    },
    {
      "title": "Шаблон",
      "content": "По этому шаблону необходимо создавать проект",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > section > section > aside > dl:nth-child(4)",
      "arrow": "left",
    },
    {
      "title": "Краткая информация",
      "content": "Здесь находится краткая информация о мероприятии",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > section > section > article > div > ul.event-view_list_34NS2",
      "arrow": "bottom",
    },
    {
      "title": "Максимальный размер гранта",
      "content": "Максимальная сумма, которую можно получить за это мероприятие",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > section > section > article > div > ul.event-view_list_34NS2 > li:nth-child(7)",
      "arrow": "bottom",
    },
    {
      "title": "О Мероприятии",
      "content": "Здесь находится наиболее полная информация о мероприятии",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > section > section > article > div > div.event-view_description_3Ru3C",
      "arrow": "right",
    },
    {
      "title": "Документы",
      "content": "Документы, регламентирующие конкурс",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > section > section > article > div > h3:nth-child(4)",
      "arrow": "right",
    },
    {
      "title": "Смены",
      "content": "Смены конкурса",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > section > section > article > div > div.event-view_wrapper_3I2mb > h3",
      "arrow": "right",
    },
    {
      "title": "Подать заявку",
      "content": "Кнопка для подачи заявок на грант",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > section > section > article > div > div.event-view_wrapper_3I2mb > div > div > div > a",
      "arrow": "right",
    },
  ],
  "0": [],
  ">events": [
    {
      "title": "Фильтры",
      "content": "С помощью этих фильтров можно искать мероприятия для вас",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > section > div > header > div.app-tabs_row_1BFHF.app-tabs_filters_3dT5G",
      "arrow": "top"
    },
    {
      "title": "Мероприятия",
      "content": "Здесь можно выбрать мероприятие",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > section > div > div > ul > li:nth-child(1)",
      "arrow": "top"
    },
    {
      "title": "Поиск",
      "content": "Позволяет найти по названию",
      "selector": "#app > div.app-layout_wrapper_35RWz > div > main > section > div > header > div.app-tabs_row_1BFHF.app-tabs_filters_3dT5G > div.base-input.base-field.base-field--animated.app-tabs_search_1JigB > div",
      "arrow": "right"
    },

  ],
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
  ">projects": [
    {
      title: "Здесь полезные фильтры",
      content: "Можно выбрать только нужное",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > div > header > div.app-tabs_row_1BFHF.app-tabs_filters_3dT5G > div.app-tabs_filtersRow_2OjxF > div:nth-child(2)',
      arrow: "top",
    },
    {
      title: "Кнопка создания проекта",
      content: "Можно создать свой проект",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > div > header > div:nth-child(1) > div > div > button > span > div > svg',
      arrow: "right",
    },
    {
      title: "Здесь редактирование",
      content: "информации о проекте",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > div > div > ul > li > div > div > div > div > div.projects-item_controls_2YNMX > a > span',
      arrow: "bottom",
    },
  ],
  ">help": [
    {
      title: "В этом разделе будут ответы на вопросы",
      content: "Прежде, чем обращаться в техническую поддержку рекомендуем изучить",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > div > header > div > h3',
      arrow: "top",
    }, {
      title: "Нажмите на плюс и раскроется описание",
      content: "В нём будет ответ на вопрос",
      selector: '#item0 > h3 > div > svg > path',
      arrow: "right",
    },
  ],
  ">articles": [
    {
      title: "Это страница базы знаний",
      content: "Здесь есть различные инструкции и рекомендации",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > div > header > div:nth-child(1) > h3',
      arrow: "top",
    }, {
      title: "Фильтрация",
      content: "Можно выбрать только то, что Вам нужно.",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > div > header > div.app-tabs_row_1BFHF.app-tabs_filters_3dT5G > div.app-tabs_filtersRow_2OjxF > div:nth-child(2) > div',
      arrow: "top",
    }, {
      title: "Карточка материала",
      content: "По нажатию откроется страница с полным текстом",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > div > div > div:nth-child(1) > ul > li:nth-child(1) > li',
      arrow: "left",
    },
  ],
  ">participants": [
    {
      title: "Здесь история ваших заявок на участие",
      content: "",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > div > header > div > h3',
      arrow: "top",
    },
    {
      title: "Название мероприятия",
      content: "",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > div > div > ul > li > div > div > div > div.participants-item_header_1p6jl > h3',
      arrow: "top",
    },
    {
      title: "Дата заявки",
      content: "",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > div > div > ul > li > div > div > div > div.participants-item-entry_card_2ZyWW > div.participants-item-entry_body_232S1 > div.participants-item-entry_caption_1MnVp > span',
      arrow: "right",
    },
    {
      title: "Статус заявки",
      content: "",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > div > div > ul > li > div > div > div > div.participants-item-entry_card_2ZyWW > div.participants-item-entry_body_232S1 > div.base-badge > span',
      arrow: "left",
    },
    {
      title: "Подробнее о статусах",
      content: "Можно нажать и почитать",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > div > header > div > div > div',
      arrow: "top",
    },
  ],
  ">events>c490a68f-9354-40b0-8f81-61978d48ccff>request>8332b12f-a3fe-48f0-8e04-e594a0ec2fd7:7238b271-a6aa-4d5d-8ad7-4669d31a5d7c:groups:grant": [
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
    },
    {
      title: "Остался последний шаг",
      content: "Шми кнопку!)",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > section > article > div > form > footer > div > button',
      arrow: "bottom",
    }
  ],
  ">projects>create>386d79e1-1fa9-4e9d-9357-f8777644bcde:1c49a8d0-35c1-43c3-894e-ed03087dceaa":[
    {
      title: "Укажите название Вашего проекта",
      content: "Название проекта должно содержать в себе как описательную часть, так и творческую, креативную.",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > section > article > div > form > section:nth-child(1) > div.base-input.base-field.base-field--animated.base-field--grid.base-field--grid-12',
      arrow: "top",
    },
    {
      title: "Выбор региона",
      content: "необходимо указать субъект Российской Федерации, в котором будет происходить реализация проекта.",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > section > article > div > form > section:nth-child(1) > div.base-select.base-field.base-field--animated.base-field--grid.base-field--grid-12 > div > div > div.multiselect__tags',
      arrow: "top",
    },
    {
      title: "Здесь указаны требования к фотографии",
      content: "Вам важно их соблюдать",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > section > article > div > form > section.base-row.base-row--nowrap > div.project-edit-form_description_1LOZm > p',
      arrow: "left",
    },
    {
      title: "Добавление фото",
      content: "можно загрузить логотип проекта в формате pdf, png, jpg, doc не содержащий нежелательный, вредоносный контент (это необязательное поле).",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > section > article > div > form > section.base-row.base-row--nowrap > div.base-dropzone > div > label',
      arrow: "left",
    },{
      title: "Эта информация заполняется автоматически",
      content: "Если что-то заполнено не верно, то Вам нужно отредактировать свой профиль по ссылке: https://myrosmol.ru/profile",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > section > article > div > form > section:nth-child(3) > div:nth-child(2)',
      arrow: "bottom",
    },{
      title: "Уровень реализации проекта",
      content: "Про уровни реализации можно прочитать по ссылке: https://ibb.co/9YPm8P0",
      selector: '#\\36 5acfb4c-0e17-47d4-88a0-d834b58d300b > div > div > div.multiselect__tags',
      arrow: "bottom",
    },{
      title: "Информация про срок реализации",
      content: "Реализация проекта предполагает, не только организацию, подготовку и проведение ключевого мероприятия, но и подведение итогов, работу по развитию проекта.",
      selector: '#ef939504-7f6b-4895-b020-9261cbdb6f53 > div > div > div',
      arrow: "right",
    },{
      title: "Дата начала",
      content: "Начало реализации проекта не может быть ранее даты подписания Приказа об утверждении списка победителей конкурса (50 календарных дней со дня окончания приема заявок).",
      selector: '#ef939504-7f6b-4895-b020-9261cbdb6f53 > div > div > div > input',
      arrow: "top",
    },{
      title: "Дата окончания",
      content: "Окончание реализации проекта наступает в тот момент, когда планируется полное подведение итогов и направление отчетных документов",
      selector: '#ef939504-7f6b-4895-b020-9261cbdb6f53 > div > div > div > input',
      arrow: "top",
    },
    {
      title: "Про срок",
      content: "Проект не может длиться более 1 календарного года с момента подписания Приказа об утверждении списка победителей конкурса",
      selector: '#ef939504-7f6b-4895-b020-9261cbdb6f53 > div > div > div > input',
      arrow: "top",
    },{
      title: "Опыт руководителя",
      content: "В данном поле необходимо указать информацию, которая поможет экспертам конкурса убедиться в том, то руководитель проекта обладает достаточными знаниями, опытом и компетенциями для качественной реализации проекта.",
      selector: '#\\33 c0d9566-d7d8-4ed3-9ae8-e0b8e87e7c8b-329',
      arrow: "bottom",
    },{
      title: "Роль руководителя",
      content: "Расскажите какие обязанности выполняет руководитель, кроме управленческих, для достижения целей проекта.",
      selector: '#\\30 e0813ae-65ae-455b-9fc7-da9b8bf12048-334',
      arrow: "bottom",
    },{
      title: "Адрес",
      content: "Укажите адрес подробно, например: ул. Большая Лубянка, 12/1, Москва, Россия, 101000",
      selector: '#fa748cf9-457c-4483-ac10-6b16c49a04d9',
      arrow: "bottom",
    },{
      title: "Резюме руководителя",
      content: "Рекомендуем прикреплять в формате PDF. Ограничение 50 мегабайт.",
      selector: '#file344',
      arrow: "left",
    },{
      title: "Видеовизитка",
      content: "Подробнее можно найти здесь: https://ibb.co/HVZYC3J",
      selector: '#\\39 c53bcbb-9854-4ee7-a0af-fc275fe41509-348',
      arrow: "bottom",
    },{
      title: "Сохранение черновика",
      content: "Такая кнопка есть в каждой вкладке. Вы можете воспользоваться ей, если захотите продолжить заполнять позже",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > section > article > div > form > footer > div.project-edit-form_controls_2WmVt > button.base-button.base-button--alternate',
      arrow: "bottom",
    },{
      title: "Следующий шаг",
      content: "Заполнение информации о проекте",
      selector: '#app > div.app-layout_wrapper_35RWz > div > main > section > section > aside > div > ul > li:nth-child(2) > a',
      arrow: "left",
    }
  ]
};
