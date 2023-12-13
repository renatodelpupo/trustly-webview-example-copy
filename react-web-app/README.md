This web app renders an example of the Select Bank Widget and a button that launches the Lightbox directly. It is meant to be used with this repository's Android and iOS example apps to test and demonstrate the use of a WebView to integrate Trustly with a mobile app.

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Install dependencies

`npm install`

2. Add your Trustly sandbox credentials

Copy the `.env.sample` file to a new `.env.local` file and fill out your environment variables.

Alternatively, you can pass these data later using query parameters, via camelCase keys. Example:

`?accessId=YOUR_ACCESS_ID&merchantId=YOUR_MERCHANT_ID`

Both ways to fill the data work the same.

3. Run

`npm start`

This command runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Live Example

Visit https://renatodelpupo.github.io/trustly-webview-example-copy/ to see the project live.

Important: You'll need to pass your sandbox environment variables using query parameters. Check the `.env.sample` file to learn about the required properties. Example:

`https://renatodelpupo.github.io/trustly-webview-example-copy/?accessId=YOUR_ACCESS_ID&merchantId=YOUR_MERCHANT_ID`
