import { throttle } from "./libs/utils";
import "./polyfills.js";
import "./blocks.js";

// Функции

// Единицы высоты (ширины) экрана

// Ширина скроллбара
const setScrollbarWidth = () => {
	document.documentElement.style.setProperty('--sw', `${window.innerWidth - document.documentElement.clientWidth}px`);
}

// Запуск функций
setScrollbarWidth();