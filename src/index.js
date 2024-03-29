import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import App from "./App";
import { TriviaContextProvider } from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TriviaContextProvider>
      <App />
    </TriviaContextProvider>
  </React.StrictMode>
);
