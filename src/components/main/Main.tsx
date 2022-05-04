import AdminPanel from "./adminPanel/AdminPanel";

import { Routes, Route } from "react-router-dom";
import s from "./css/style.module.css";
import MainContent from "./mainContentCarousel/MainCarousel";

function Main() {
  return (
    <>
      <h1 className={s.title}>MainPage</h1>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="goods" element={<MainContent />} />
          <Route path="adminPanel" element={<AdminPanel />} />
        </Routes>
    </>
  );
}

export default Main;
