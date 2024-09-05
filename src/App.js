import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTOp/scrollToTop";
import { PathProvider } from "./context/PathContext";

export default function App() {
  return (
    <BrowserRouter>
      <PathProvider>
        <Header />
        <Router />
        <ScrollToTop />
        <Footer />
      </PathProvider>
    </BrowserRouter>
  );
}
