import React from "react";
import s from "./css/style.module.css";
const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.copyRight}>
          @ Copy Right 2022
      </div>
    </div>
  );
};

export default Header;
