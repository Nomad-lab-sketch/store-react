import React, { useEffect } from "react";
import s from "./App.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { setProductCardThunk } from "./redux/productCardReducer";
import { useDispatch } from "react-redux";


function App() {

  const dispatch = useDispatch();

useEffect(() => {
  dispatch(setProductCardThunk())
}, [])

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
