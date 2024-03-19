let titleProject = prompt("Название проекта?");
let screensValue = prompt("Какой тип экранов? Шаблонные, с уникальным дизайном, с анимациями");
let responsive = confirm("Нужен ли респонсивный сайт?")

let service1 = prompt("Какой сервис нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой еще сервис тебе нужен?");
let servicePrice2 = +prompt("Сколько будет стоить этот сервис?");
let screenPrice = 5000;
let percentage = 20;

//  Считаем стоимость дополнительных услуг
function getAllServicePrice() {
    return servicePrice1 + servicePrice2;
};

let allServicePrice = getAllServicePrice();

// Считаем полную стоимость услуг
let getFullPrice = function() {
    return allServicePrice + screenPrice;
};

    let fullPrice = getFullPrice();

// Переводим первую букву названия проекта в верхний регистр
function getTitle(string) {
    string = string.trim();
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

    titleProject = getTitle(titleProject);

// Итоговая стоимость за вычетом процента подрядчику
let getAllServicePercentPrice = function() {
    let servicePercentPrice = fullPrice * (percentage / 100);
    servicePercentPrice = Math.round(servicePercentPrice);
    return fullPrice - servicePercentPrice;
};

    let servicePercentPrice = getAllServicePercentPrice();

//  Значение скидки для клиента 
let getRollbackMassage = function() {
    let message = (fullPrice > 50000) ? "Скидка 10%":
    (fullPrice > 20000 && fullPrice < 50000) ? "Скидка 5%":
    (fullPrice < 20000 && fullPrice > 0) ? "Нет скидки":
    (fullPrice < 0) ? "Что-то пошло не так":
    (fullPrice == 0) ? "Перемен требуют наши сердца":
    (fullPrice == 20000) ? "Перемен требуют наши сердца":
    (fullPrice == 50000) ? "Перемен требуют наши сердца":
    "Нет скидки";

    console.log(message);
};

getRollbackMassage();