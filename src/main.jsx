import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import reducer, { initialState } from "./reducer";
import "./index.css";
import { StateProvider } from "./StateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <StateProvider reducer={reducer} initialState={initialState}>
        <App />
      </StateProvider>
    </React.StrictMode>
  </BrowserRouter>
);
