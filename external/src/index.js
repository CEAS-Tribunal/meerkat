import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div className="intro">
      <App />
    </div>
  </BrowserRouter>
);

// ReactDOM.render(
//   <BrowserRouter>
//     <div className="intro">
//       <App />
//     </div>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
