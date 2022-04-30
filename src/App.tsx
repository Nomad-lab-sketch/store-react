import React from "react";
import s from "./App.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className={s.App}>
        <Header />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
