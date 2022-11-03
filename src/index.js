import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import client from "./apolloClient";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import keycloak from './keycloak';
import store from './redux/store';
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const persistor = persistStore(store);
const initOptions = {
    onLoad: 'check-sso',
    checkLoginIframe: false,
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
};

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <App />
                    </PersistGate>
                </Provider>
            </ReactKeycloakProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.unregister();
