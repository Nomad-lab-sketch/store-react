import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductCard } from "../models/TProduct"

interface StateType {
    productCard: ProductCard[]
} 

const initialState: StateType = {
    productCard: []
}

export const productCardSlice = createSlice({
    name: 'productCard',
    initialState,
    reducers: {
        productCardSet(state, action: PayloadAction<ProductCard[]>){
            state.productCard = action.payload
        }
    }
}) 

export default productCardSlice.reducer