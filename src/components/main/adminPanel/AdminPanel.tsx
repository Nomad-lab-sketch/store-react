import { createNewGood } from "../../../dal/api";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/redux";
import { productCount, productName, productPrice } from "../../../redux/reducers/productCardSlice"

import s from "./css/style.module.css";



const AdminPanel: React.FC = () => {
	const dispatch = useAppDispatch()
	const {name, count, price} = useAppSelector(state => state.productCard)

	const setGoodName = (event: React.FormEvent<HTMLInputElement>) => {
		dispatch(productName(event.currentTarget.value))
	}

	const setGoodPrice = (event: React.FormEvent<HTMLInputElement>) => {
		dispatch(productPrice(event.currentTarget.value))
	}

	const setGoodCount = (event: React.FormEvent<HTMLInputElement>) => {
		dispatch(productCount(event.currentTarget.value))
	}

	const setNewGood = () => {
		createNewGood(count,name,price)
		dispatch(productName(''))
		dispatch(productPrice(''))
		dispatch(productCount(''))
	}

	return (
		<div className={s.adminPanel}>
			<h1>AdminPanel</h1>
			<h4>create new good:</h4>
			<div className={s.card__wrapper}>

				<div className={s.inputWrapper}>
					<div className={s.inputName}>name of good</div>
					<input 
					value={name}
					onInput={setGoodName} 
					className={s.customInput} 
					type="text" />
				</div>

				<div className={s.inputWrapper}>
					<div className={s.inputName}>price</div>
					<input 
					value={price}
					onInput={setGoodPrice} 
					className={s.customInput} 
					type="number" />
				</div>

				<div className={s.inputWrapper}>
					<div className={s.inputName}>count</div>
					<input 
					value={count}
					onInput={setGoodCount} 
					className={s.customInput} 
					type="number" />
				</div>
				
				<button onClick={setNewGood} className={s.sendButton}>create</button>
			</div>
		</div>
	)
}

export default AdminPanel
