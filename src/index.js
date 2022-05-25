import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.scss";
import store from "./app/store";
import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";

import { GET_API, initAPI } from "./api";
import { LOCAL_SET_API } from "./constants";
const isSet = GET_API("get", { from: LOCAL_SET_API });
if (!isSet) {
    initAPI();
}
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App tab="home" />
        </BrowserRouter>
    </Provider>
);
