import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logOut } from "../../dal/api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import s from "./css/style.module.css";
const Header = () => {

	const dispatch = useAppDispatch()
	const { isAuth, userName } = useAppSelector(state => state.userAuth)

	let navigate = useNavigate();

	const logOutUser = () => {
		logOut(dispatch, navigate)
	}

	return (
		<div className={s.wrapper}>
			<nav className={s.navigation}>
				{userName ?
					<div className={s.navigation__userNameWrapper}>
						<span className={s.navigation__userName}>{userName}</span>
						<button 
						onClick={logOutUser}
						className={s.navigation__userNameLogOut}>Выйти</button>
					</div>
					:
					<></>
				}


				<Link className={s.navigation__ref} to="/goods">Goods</Link>

				{
					isAuth ?
						<Link className={s.navigation__ref} to="adminPanel">Admin panel</Link>
						:
						<Link className={s.navigation__ref} to="authPage">Singn in</Link>
				}
			</nav>
		</div>
	);
};

export default Header;


