
import AdminPanel from "./adminPanel/AdminPanel"
import AuthPage from "./authPage/AuthPage"
import GoodsPage from "./goodsPage/GoodsPage"
import MainContent from "./mainContentCarousel/MainCarousel";

import { Routes, Route } from "react-router-dom";
import s from "./css/style.module.css";



function Main() {
  return (
    <>
      <h1 className={s.title}>MainPage</h1>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="goods" element={<MainContent />} />
          <Route path="adminPanel" element={<AdminPanel />} />
		  <Route path="authPage" element={<AuthPage/>} />
        </Routes>
    </>
  );
}

export default Main;
