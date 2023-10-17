import { axiosAuth, axiosNoAuth } from "../http/axios";
import {
	apiAddExpense,
	apiGetIncome,
	apiGetProgile,
	apiLoadExpense,
	apiLogin,
	apiaddIncome,
} from "./apiEndPoint";
import {
	ADD_EXPENSE,
	ADD_INCOME,
	ERROR,
	LOADING,
	LOAD_EXPENSE,
	LOAD_INCOME,
	LOAD_PROFILE,
	LOGIN,
} from "./const";

// export const login = (credential) => async (dispatch) => {
// 	try {
// 		dispatch({ type: LOADING });
// 		const response = await axiosNoAuth.post(apiLogin, credential);
// 		localStorage.setItem("encodedToken", response.data.data.encodedToken);
// 		dispatch({ type: LOGIN, payload: response.data.data });
// 	} catch (error) {
// 		console.log(error);
// 		dispatch({ type: ERROR });
// 	}
// };

// export const getProfile = () => async (dispatch) => {
// 	try {
// 		dispatch({ type: LOADING });
// 		const response = await axiosAuth.get(apiGetProgile);
// 		dispatch({ type: LOAD_PROFILE, payload: response.data.data });
// 	} catch (error) {
// 		dispatch({ type: ERROR });
// 	}
// };

export const addIncome = (income) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axiosAuth.post(apiaddIncome, income);
		dispatch({ type: ADD_INCOME, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};

export const getIncome = () => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axiosNoAuth.get(apiGetIncome);
		dispatch({ type: LOAD_INCOME, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};

export const AddExpense = (expense) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axiosNoAuth.post(apiAddExpense, expense);
		dispatch({ type: ADD_EXPENSE, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};

export const getExpense = () => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axiosNoAuth.get(apiLoadExpense);
		dispatch({ type: LOAD_EXPENSE, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};