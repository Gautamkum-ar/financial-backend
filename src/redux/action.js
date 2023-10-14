import { axiosNoAuth } from "../http/axios";
import { apiLogin } from "./apiEndPoint";
import { ERROR, LOGIN } from "./const";

export const login = (credential) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axiosNoAuth(apiLogin, {
			...credential,
		});
		dispatch({ type: LOGIN, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};
