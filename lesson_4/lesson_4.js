let titleProject = prompt('Название проекта?');
let screensValue = prompt('Какой тип экранов? Шаблонные, с уникальным дизайном, с анимациями');
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