export enum Events {
askText = "askText", //вопрос в чат
getMe = "getMe", //Получение инфы о юзере
getGrants = "getGrants", //Получение списка грантов
getGrantInfo = "getGrantInfo", //Получение сведений о конкретном грантовом проекте
getKnowledge = "getKnowledge", //Получение базы знаний
sendMail = "sendMail", //отправка почты
locationChanged = "locationChanged" //Смена просматриваемой страницы
}

export enum Emits{
    lowActive = "lowActive", //когда долго не активничает
    grantPage = "grantPage" // Когда на странице гранта
}