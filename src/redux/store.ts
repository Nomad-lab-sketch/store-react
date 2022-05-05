import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productCard from "./reducers/productCardSlice"
import userAuth from "./reducers/userAuthSlice"

const rootReducer = combineReducers({
    productCard,
	 userAuth,
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']