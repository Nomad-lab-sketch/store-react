import React, { useEffect } from "react";
import s from "./App.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProductCardData } from "./redux/reducers/actionCreators";
import { useAppDispatch } from "./redux/hooks/redux";

function App() {

const dispatch = useAppDispatch()

useEffect(() => {
  dispatch(fetchProductCardData())
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
