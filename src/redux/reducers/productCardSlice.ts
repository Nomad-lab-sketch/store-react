import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductCard, StateType } from "../models/TProduct"



const initialState: StateType = {
	name: '',
	count: '',
	price: '',
	productCard: [],
}

export const productCardSlice = createSlice({
	name: 'productCard',
	initialState,
	reducers: {
		productCardGet(state, action: PayloadAction<ProductCard[]>) {
			state.productCard = action.payload
		},
		productName(state, action: PayloadAction<string>) {
			state.name = action.payload
		},
		productCount(state, action: PayloadAction<string>) {
			state.count = action.payload
		},
		productPrice(state, action: PayloadAction<string>) {
			state.price = action.payload
		},
	}
})

export default productCardSlice.reducer
export const {productCardGet, productName, productCount, productPrice} = productCardSlice.actions