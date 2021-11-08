import React from "react";
import "../src/styles/index.css";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "../src/services/firebase.service.mjs";

export const decorators = [
  (Story) => {
    return (
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Story />
      </FirebaseAppProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
