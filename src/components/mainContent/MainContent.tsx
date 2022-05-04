import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import { ProductCard } from "../../redux/models/TProduct";
import { fetchProductCardData } from "../../redux/reducers/actionCreators";

import s from "./css/style.module.css";

const MainContent = () => {
	const product: Array<ProductCard> = useAppSelector((state) => state.productCard.productCard);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProductCardData());
	}, []);

	return (
		<div className={s.goods__mainWrapper}>
			<h1>Goods</h1>
			<div className={s.goods__cardWrapper}>
				{product.map((i) => (
					<div key={i.id} className={s.productCard}>
						<div className={s.productCard__name}>Name: {i.name}</div>
						<div className={s.productCard__count}>Viewers: {i.count}</div>
						<div className={s.productCard__price}>Price: {i.price}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default React.memo(MainContent);
