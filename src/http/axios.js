import axios from "axios";

// axios instance with authorization header
export const axiosAuth = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

//axios instance without header
export const axiosNoAuth = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

// Axios interceptor to add authorization header to all requests to axiosAuth
axiosAuth.interceptors.request.use(
	(config) => {
		config.headers = config.headers ?? {};
		if (!config.headers["Authorization"]) {
			config.headers["Authorization"] = `Bearer ${localStorage.getItem(
				"access_token"
			)}`;
		}
		return config;
	},
	async (error) => {
		return Promise.reject(error);
	}
);
