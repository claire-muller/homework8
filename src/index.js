import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import "./index.css";

var destination = document.querySelector("#root");
const root = ReactDOM.createRoot(destination);

root.render(
    <Main/>
);

