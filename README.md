# 💲Rates&Exchange💲

## [🔗Link on Vercel](https://gft-exchange.vercel.app/)
<hr/>

## About this web application

1. This application allows you to convert any currency of the world into another currency (including cryptocurrency)
2. Also, one of the application's functions is the ability to view the value of one currency in relation to others
3. All data on currencies are taken from: https://exchangerate.host/#/#docs
4. The image of flags is formed dynamically depending on the code of currencies available on the server.
5. When developing the application, the main attention focused on the design of the application, the style and quality of the code, as well as the accessibility of the application from the keyboard.
6. I put into hooks all possible logic that could be abstracted from the component.
7. The application functionality meets the specified requirements and also covers some edge cases, such as:
   - negative value in the input field;
   - the lack of one of the required query parameters in the URL params does not make an extra request to the server;
   - incorrect characters in the input field;
   - debounce input fields to avoid excessive requests to the server;
   - reuse of the CurrencyForm on different pages;
   - images are loaded gradually (lazy loading);
   - any of API error in requests are caught on the View layer and displayed as pop-up notifications with toastify.
1. Liners and plugins are used to format the code and follow a single code style
### P.S. If the code is not yet covered by tests, then this process is still ongoing and will be completed in the next day or two ;)
### P.S.S. The tests will be unit - I use vitest, testing-library/react and testing-library/userEvent as a complement to the second one

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
3. 🏁 And that's all! 🙌

## Usage

To start the application locally in dev-mode on **5555** PORT:

```sh
npm run dev
```

Then open [http://localhost:5555](http://localhost:5555/)
