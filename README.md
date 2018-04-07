# Warming Center

The Warming Center app contains a basic Ionic is an app for coordinating warming center
activations and tracking gues/volunteer data.  It uses Firebase to provide the backend
services including a database and secure authentication.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Pages](#pages)
3. [Providers](#providers)
4. [i18n](#i18n)

## <a name="getting-started"></a>Getting Started

1. The Ionic CLI is the recommended way for getting started with this projects.
You can install it with this command. \(Install [Node.js](https://nodejs.org) if you don't have it\)
```bash
npm install -g ionic@latest
```

2. Create a new Firebase application at https://console.firebase.google.com

3. Create a file named `src/environment.ts` and add the following:
```javascript
export const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  projectId: '<your-project-id>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>'
};
```

4. Replace the values in `src/environment.ts` with the config values from the
Firebase application that was created in step 2

5. Run the following command from the root of the repository:
```bash
ionic serve
```

Now you should be able to navigate the application in the browser of your
choice at http://localhost:8100. Instructions for deploying to a mobile
device can be found at https://ionicframework.com/docs/intro/deploying/

## Pages

App pages are located in `src/pages` and detail the user interface.  Additional
pages can be added here to extend the functionality of the app.

The `FirstRunPage` is the page displayed when the app loads and defaults to `LoginPage`.

The `MainPage` is displayed after a user is aunthenticated and defaults to `LoginPage`.

Both of these settings can changed in `/src/pages/pages.ts`.

## Providers

There are providers used throughout the application to access services and
share data

### Auth

The `Auth` provider is used to authenticate users through its
`login(email, password)` method, which authenticates with Firebase's email/password
authentication method.  It also contains the `logout()` method.

## i18n

Warming Center contains support for internationalization (i18n) with
[ngx-translate](https://github.com/ngx-translate/core).

### Adding Languages

To add new languages, add new files to the `src/assets/i18n` directory,
following the pattern of LANGCODE.json where LANGCODE is the language/locale
code (ex: en/gb/de/es/etc.). Copying over an existing language file and replacing
the translations for the new language is a quick way to get it done.

### Changing the Language

To change the language of the app, edit `src/app/app.component.ts` and modify
`translate.use('en')` to use the LANGCODE from `src/assets/i18n/`
