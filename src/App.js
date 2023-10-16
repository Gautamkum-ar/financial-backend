import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Expenses, Home, Login, Reports, Saving } from "./pages";
import { ProtectedRoutes, PublicRoutes } from "./route/route";

function App() {

	return (
		<div className="App">
			<Routes>
				{/* <Route element={<ProtectedRoutes />}> */}
					<Route path="/" element={<Home />} />
					<Route path="/expenses" element={<Expenses />} />
					<Route path="/saving" element={<Saving />} />
					<Route path="/reports" element={<Reports />} />
				{/* </Route> */}
				{/* <Route element={<PublicRoutes />}>
					<Route path="/login" element={<Login />} />
				</Route> */}
			</Routes>
		</div>
	);
}

export default App;
