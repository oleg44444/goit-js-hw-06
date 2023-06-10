// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  spanEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// 3) Дев'яте завдання виконане не повністю. Уважно перечитайте умови завдання та виконайте його згідно умов.
