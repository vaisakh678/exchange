import React from "react";
import Appbar from "../../components/Appbar";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
	return (
		<div className="w-screen min-h-screen">
			<Appbar />
			<Outlet />
		</div>
	);
};

export default Home;

