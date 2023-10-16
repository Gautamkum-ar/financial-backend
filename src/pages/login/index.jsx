import { useState } from "react";
import { useDispatch } from "react-redux";

export const Login = () => {
	const [loginDetail, setLoginDetail] = useState({
		email: "",
		password: "",
	});
	const dispatch = useDispatch();
	return (
		<div className="flex flex-col w-full h-screen justify-center items-center bg-slate-100 ">
			<form
				onSubmit={(e) => e.preventDefault()}
				className="flex flex-col shadow-lg p-4 bg-white rounded-md w-[30%]">
				<h1 className="text-center">Login</h1>
				<label className="flex flex-col">
					Enter Your Email
					<input
						type="email"
						placeholder="Email"
						onChange={(e) =>
							setLoginDetail({ ...loginDetail, email: e.target.value })
						}
					/>
				</label>
				<label className="flex flex-col">
					Enter your password
					<input
						type="password"
						placeholder="Password"
						onChange={(e) =>
							setLoginDetail({ ...loginDetail, password: e.target.value })
						}
					/>
				</label>
				{/* <button
					className="flex  border w-16 justify-center items-center rounded-md"
					onClick={() => dispatch(login(loginDetail))}>
					Login
				</button> */}
			</form>
		</div>
	);
};
