import { getData } from "../../dal/api";
import { ProductCard } from "../models/TProduct";
import { AppDispatch } from "./../store";
import { productCardSlice } from "./productCardSlice";

export const fetchProductCardData = () => async (disaptch: AppDispatch) => {
	try {

		let data = await getData();
		let switchToArray: Array<ProductCard> = Object.values(data);
		disaptch(productCardSlice.actions.productCardGet(switchToArray));
	} catch (e) {
		// TODO add handler error
	}
};
