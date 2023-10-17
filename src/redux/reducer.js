import {
	ADD_EXPENSE,
	ADD_INCOME,
	FILTER,
	FILTER_EXPENSE,
	LOADING,
	LOAD_EXPENSE,
	LOAD_INCOME,
	LOAD_PROFILE,
	LOGIN,
	SORTING,
	SORTING_EXPENSE,
} from "./const";

const initalState = {
	isLoggedIn: false,
	isLoading: false,
	isAuthenticated: false,
	userData: [],
	reservedData: [],
	incomeData: [],
	expenseData: [],
	resExpense: [],
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
		case ADD_EXPENSE: {
			return {
				...state,
				isLoading: false,
				expenseData: [...state.expenseData, payload],
			};
		}
		case LOAD_EXPENSE: {
			return {
				...state,
				isLoading: false,
				expenseData: payload,
				resExpense: payload,
			};
		}
		case FILTER_EXPENSE: {
			const data = [...state.resExpense];
			const filterdata = data.filter((item) =>
				item.category.toLowerCase().includes(payload.toLowerCase())
			);
			return {
				...state,
				expenseData: payload === "" ? state.resExpense : filterdata,
			};
		}
		case SORTING_EXPENSE: {
			const sortedExpense = [...state.expenseData].sort((a, b) => {
				if (payload === "LowToHigh") {
					return a.amount - b.amount;
				} else if (payload === "HighToLow") {
					return b.amount - a.amount;
				}
			});
			return {
				...state,
				expenseData: sortedExpense,
			};
		}
		default: {
			return state;
		}
	}
};
