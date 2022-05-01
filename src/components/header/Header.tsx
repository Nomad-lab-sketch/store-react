import React from "react";
import { Link } from "react-router-dom";
import s from "./css/style.module.css";
const Header = () => {
	return (
		<div className={s.wrapper}>
			<nav className={s.navigation}>
				<Link className={s.navigation__ref} to="/goods">Goods</Link> 
				<Link className={s.navigation__ref} to="adminPanel">Admin</Link>
			</nav>
		</div>
	);
};

export default Header;
