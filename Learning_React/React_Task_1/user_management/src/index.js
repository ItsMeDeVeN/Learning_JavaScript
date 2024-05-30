import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);  