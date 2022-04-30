import React from "react";
import { NavLink } from "react-router-dom";
import s from "./css/style.module.css";
const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.navigation}>
        <NavLink to="#">
          <div className={s.navigation__ref}>Login</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
