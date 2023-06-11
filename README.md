# Про цей Web Application

## Доречі, тут ви можете його переглянути вживу: [deploy on Vercel](https://gft-exchange.vercel.app/)

<hr/>

1. Даний застосунок дозволяє конвертувати будь-яку валюту світу в іншу валюту (в тому числі і криптовалюту)
2. Також однією з функцій застосунку є можливість перегляду вартості однієї валюти стосовно інших
3. Всі дані про валюти беруться за адресою: *https://exchangerate.host/#/#docs*
4. Зображення прапорів формується динамічно в залежності від коду валют які є на сервері.
5. При розробці застосунку основна увага приділялась дизайну додатку, стилю та якості коду а також доступності додатку з клавіатури.
6. Всю можливу логіку яку можна було абстрагувати від компонента я виносив у хуки.
7. Функціонал додатку відповідає заданим вимогам а також покриває деякі edge-кейси, такі як:
   - від'ємне значення в полі вводу;
   - відсутність одного з обов'язкових query параметрів в URL params;
   - некоректні символи в полі вводу;
   - debounce поля вводу задля уникнення надмірних запитів на сервер;
   - перевикористання однієї форми на різних сторінках;
   - зображення підвантажуються поступово (lazy loading);
   - будь-які помилки запиту чи API ловляться на View шарі і показуються у вигляді попап сповіщення задопомогою toastify.
   - Використовуються лінтери та плагіни для форматування коду та дотримання єдиного код-стилю

### P.S. Якщо код ще не покритий тестами, значить цей процес ще триває і обов'язково завершиться в найближчий день-два ;)

### P.S.S. Тести будуть unit - я використовую vitest, testing-library/react а також testing-library/userEvent як доповнення до другого

<hr/>

## Getting started

To run the application on your local machine follow these steps:

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/v4voloshyn/GFT-Exchange.git .
   ```
2. Install NPM packages
   ```sh
   npm i
   ```
3. And that's all!

## Usage

To start the application locally in dev-mode on **5555** PORT:

```sh
npm run dev
```

Then open [http://localhost:5555](http://localhost:5555/)
