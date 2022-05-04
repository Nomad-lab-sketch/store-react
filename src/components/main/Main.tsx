import AdminPanel from "./adminPanel/AdminPanel"
import AuthPage from "./authPage/AuthPage"
import MainContent from "../mainContent/MainContent";

import { Routes, Route, } from "react-router-dom";
import s from "./css/style.module.css";


function Main() {
	return (
		<div className={s.mainWrapper}>
			<Routes>
				<Route path="/" element={<MainContent />} />
				<Route path="goods" element={<MainContent />} />
				<Route path="adminPanel" element={<AdminPanel />} />
				<Route path="authPage" element={<AuthPage />} />
			</Routes>
		</div>
	)
}

export default Main