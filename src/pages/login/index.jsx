import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux";

export const Login = () => {
	const [loginDetail, setLoginDetail] = useState({
		email: "",
		password: "",
	});
	const dispatch = useDispatch();
	return (
		<div className="flex flex-col w-full h-screen justify-center items-center bg-slate-50 ">
			<h1 className="text-center">Login</h1>
			<form onSubmit={(e) => e.preventDefault()}>
				<label>
					Enter Your Email
					<input
						type="email"
						placeholder="Email"
						onChange={(e) =>
							setLoginDetail({ ...loginDetail, email: e.target.value })
						}
					/>
				</label>
				<label>
					Enter your password
					<input
						type="email"
						placeholder="Password"
						onChange={(e) =>
							setLoginDetail({ ...loginDetail, password: e.target.value })
						}
					/>
				</label>
				<button onClick={() => dispatch(login(loginDetail))}>Login</button>
			</form>
		</div>
	);
};
