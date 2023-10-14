import { LOGIN } from "./const";

const initalState = {
	isLoggedIn: false,
};

export const financialReducer = (state = initalState, { type, payload }) => {
	switch (type) {
		case LOGIN: {
			return {
				...state,
			};
		}
		default: {
			return state;
		}
	}
};
