import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StateType } from "../models/TAuth"



const initialState: StateType = {
	isAuth: false,
	userName: '',
	email: '',
	emailError: '',
	password: '',
	passwordError: '',
	registrationStatus: '',
	authStatus: '',
	rememberMe: false,
}

export const userAuthSlice = createSlice({
	name: 'userAuth',
	initialState,
	reducers: {
		userEmail(state, action: PayloadAction<string>) {
			state.email = action.payload
		},
		userPassword(state, action: PayloadAction<string>) {
			state.password = action.payload
		},
		userEmailError(state, action: PayloadAction<string>) {
			state.emailError = action.payload
		},
		userPasswordError(state, action: PayloadAction<string>) {
			state.passwordError = action.payload
		},
		registrationStatus(state, action: PayloadAction<string>) {
			state.registrationStatus = action.payload
		},
		authStatus(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload
		},
		showUserName(state, action: PayloadAction<string>) {
			state.userName = action.payload
		},
	}
})

export default userAuthSlice.reducer
export const { userEmail, userPassword, userEmailError, userPasswordError, registrationStatus, authStatus, showUserName} = userAuthSlice.actions
