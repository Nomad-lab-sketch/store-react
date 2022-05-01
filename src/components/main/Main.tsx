import AdminPanel from "./adminPanel/AdminPanel"
import GoodsPage from "./goodsPage/GoodsPage"

import { Routes, Route, } from "react-router-dom";
import s from "./css/style.module.css";
import MainContent from "../mainContent/MainContent";


function Main() {
	return (
		<>
			<h1 className={s.title}>MainPage</h1>
			<div className={s.mainWrapper}>
				
				<Routes>
					<Route path="/" element={<MainContent />} />
					<Route path="goods" element={<MainContent />}/>
					<Route path="adminPanel" element={<AdminPanel />} />
				</Routes>

			</div>
		</>
	)
}

export default Main