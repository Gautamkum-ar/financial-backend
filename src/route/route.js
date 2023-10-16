import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoutes = () => {
	const loading = useSelector((state) => state.loading);
	const isAuthenticated = useSelector((state) => state.isAuthenticated);
	const location = useLocation();

	return isAuthenticated && !loading ? (
		<Outlet />
	) : (
		<Navigate state={{ from: location }} replace to="/login" />
	);
};

export const PublicRoutes = () => {
	const loading = useSelector((state) => state.loading);
	const isAuthenticated = useSelector((state) => state.isAuthenticated);
	const location = useLocation();

	return !isAuthenticated && !loading ? (
		<Outlet />
	) : (
		<Navigate state={{ from: location }} replace to="/" />
	);
};
