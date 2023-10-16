import { useSelector } from "react-redux";

export const Header = () => {
	const userData = useSelector((state) => state.userData);
	return (
		<nav className="flex w-full bg-slate-100 h-16 items-center px-4 text-blue-600 justify-between">
			<h1 className="flex text-center text-2xl font-bold">
				Financial Management
			</h1>
			{/* <div className="flex h-12 w-12 rounded-full bg-white justify-center items-center mr-8">
				<h1 className="text-2xl uppercase flex justify-center items-center h-full w-full">
					{userData.name[0]}
				</h1>
			</div> */}
		</nav>
	);
};
