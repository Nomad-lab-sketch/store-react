import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"


import productCardReducer from './productCardReducer'

const rootReducer = combineReducers({
    productCard: productCardReducer
})

export type AppStateType = ReturnType<typeof store.getState>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))