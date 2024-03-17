let titleProject = prompt("Название проекта?");
let screensValue = prompt("Какой тип экранов? Шаблонные, с уникальным дизайном, с анимациями");
let responsive = confirm("Нужен ли респонсивный сайт?")

let service1 = prompt("Какой сервис нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой еще сервис тебе нужен?");
let servicePrice2 = +prompt("Сколько будет стоить этот сервис?");
let screenPrice = 5000;
let percentage = 20;

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = fullPrice * (percentage / 100);
servicePercentPrice = Math.round(servicePercentPrice);
console.log(servicePercentPrice);

let massage = (fullPrice > 50000) ? "Скидка 10%":
    (fullPrice > 20000 && fullPrice < 50000) ? "Скидка 5%":
    (fullPrice < 20000 && fullPrice > 0) ? "Нет скидки":
    (fullPrice < 0) ? "Что-то пошло не так":
    (fullPrice == 0) ? "Перемен требуют наши сердца":
    (fullPrice == 20000) ? "Перемен требуют наши сердца":
    (fullPrice == 50000) ? "Перемен требуют наши сердца":
    "Нет скидки";

console.log(massage);



// lesson_5 начинается тут

//  Считаем стоимость дополнительных услуг
function getAllServicePrice() {
    let x = servicePrice1 + servicePrice2;
    return x;
};
let allServicePrice = getAllServicePrice();

// Считаем полную стоимость услуг
let getFullPrice = function() {
    let x = allServicePrice + screenPrice;
    return x;
};
    fullPrice = getFullPrice();

// Переводим первую букву названия проекта в верхний регистр
function getTitle(string) {
    string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return string;
}
    titleProject = getTitle(titleProject);

// Итоговая стоимость за вычетом процента подрядчику
let getAllServicePercentPrice = function() {
    x = fullPrice - servicePercentPrice;
    return x;
};
    getAllServicePercentPrice = servicePercentPrice;

//  Значение скидки для клиента 
let getRollbackMassage = function() {
    let massage = (fullPrice > 50000) ? "Скидка 10%":
    (fullPrice > 20000 && fullPrice < 50000) ? "Скидка 5%":
    (fullPrice < 20000 && fullPrice > 0) ? "Нет скидки":
    (fullPrice < 0) ? "Что-то пошло не так":
    (fullPrice == 0) ? "Перемен требуют наши сердца":
    (fullPrice == 20000) ? "Перемен требуют наши сердца":
    (fullPrice == 50000) ? "Перемен требуют наши сердца":
    "Нет скидки";

    console.log(massage);
};
getRollbackMassage();