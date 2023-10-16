import {
	ADD_INCOME,
	FILTER,
	LOADING,
	LOAD_INCOME,
	LOAD_PROFILE,
	LOGIN,
	SORTING,
} from "./const";

const initalState = {
	isLoggedIn: false,
	isLoading: false,
	isAuthenticated: false,
	userData: [],
	reservedData: [],
	incomeData: [],
	expenseData: [],
};

export const financialReducer = (state = initalState, { type, payload }) => {
	switch (type) {
		case LOADING: {
			return {
				...state,
				isLoading: true,
			};
		}
		// case LOGIN: {
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		isAuthenticated: true,
		// 		userData: payload,
		// 	};
		// }
		// case LOAD_PROFILE: {
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		isAuthenticated: true,
		// 		userData: payload,
		// 	};
		// }
		case ADD_INCOME: {
			return {
				...state,
				isLoading: false,
				incomeData: [...state.incomeData, payload],
			};
		}
		case LOAD_INCOME: {
			return {
				...state,
				isLoading: false,
				incomeData: payload,
				reservedData: payload,
			};
		}
		case SORTING: {
			const sortedData = [...state.incomeData].sort((a, b) => {
				if (payload === "LowToHigh") {
					return a.amount - b.amount;
				} else if (payload === "HighToLow") {
					return b.amount - a.amount;
				}
			});
			return {
				...state,
				incomeData: sortedData,
			};
		}
		case FILTER: {
			const data = [...state.reservedData];
			const filteredIncomes = data.filter((item) =>
				item.description.toLowerCase().includes(payload.toLowerCase())
			);
			return {
				...state,
				incomeData: payload === "" ? state.reservedData : filteredIncomes,
			};
		}
		default: {
			return state;
		}
	}
};
