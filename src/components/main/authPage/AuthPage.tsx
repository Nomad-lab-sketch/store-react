import { useAppDispatch, useAppSelector } from "../../../redux/hooks/redux";
import { registrationStatus, userEmail, userEmailError, userPassword, userPasswordError } from "../../../redux/reducers/userAuthSlice";
import s from "./css/style.module.css";
import { createNewUser, signIn } from "../../../dal/api"
import { useNavigate } from "react-router-dom";

const AuthPage: React.FC = () => {
	let navigate = useNavigate();
	const dispatch = useAppDispatch()
	const authData = useAppSelector(state => state.userAuth)

	const setUserEmail = (event: React.FormEvent<HTMLInputElement>) => {
		dispatch(userEmail(event.currentTarget.value))
	}

	const setUserPassword = (event: React.FormEvent<HTMLInputElement>) => {
		dispatch(userPassword(event.currentTarget.value))
	}

	const authUser = () => {
		signIn(authData.email, authData.password, dispatch, navigate)
	}

	const userRegistration = () => {
		let countErrors = 0

		if (authData.registrationStatus !== '') {
			dispatch(registrationStatus(''))
		} 

		if(!/^[^@]+@\w+(\.\w+)+\w$/.test(authData.email)){
			dispatch(userEmailError('Неккоретно введено поле Email'))
			countErrors +=1
		} else {
			dispatch(userEmailError(''))
		}

		if (authData.password.length < 6) {
			dispatch(userPasswordError('Длина пароля должна быть не менее шести символов'))
			countErrors +=1
		} else {
			dispatch(userPasswordError(''))
		}

		if (countErrors === 0){
			createNewUser(authData.email, authData.password, dispatch)
		}
		
	}

	return (
		<div className={s.auth__wrapper}>
			<div className={s.auth__header}>Autentification</div>
			<div className={s.auth__inputsWrapper}>
				<input
				value={authData.email}
				onInput={setUserEmail} 
				className={s.auth__input} 
				type="text"
				placeholder="Your Email"
				></input>

				<div className={s.auth_inputError}>{authData.emailError}</div>

				<input
				value={authData.password}
				onInput={setUserPassword} 
				className={s.auth__input} 
				type="password"
				placeholder="Your password"
				></input>

				<div className={s.auth_inputError}>{authData.passwordError}</div>
				<div className={s.registrationStatus}>{authData.registrationStatus}</div>
				<div className={s.authStatus}>{authData.authStatus}</div>
			</div>

			<div className={s.auth__buttonWrapper}>

				<button 
				onClick={authUser}
				className={s.auth__button}>
					sign in
				</button>

				<button 
				onClick={userRegistration}
				className={s.auth__button}>
					Registration
				</button>

			</div>
		</div>
	)
}

export default AuthPage
