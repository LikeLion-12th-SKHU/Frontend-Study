import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
// ReactDOM.createRoot(entryPoint).render(<App />);
// JSX 코드의 유일한 대안
ReactDOM.createRoot(entryPoint).render(React.createElement(App));
