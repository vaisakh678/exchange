import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "../assets/icons/search.svg";

const Appbar: React.FC = () => {
	return (
		<div className="w-full px-4 bg-[#0e0f14] text-[#969faf] flex h-14 items-center sticky top-0">
			<div className="space-x-10 flex items-center mr-auto">
				<h1 className="text-white font-bold text-xl">Exchange</h1>
				<NavLink to="/">
					{({ isActive }) => <span className={`hidden  sm:flex ${isActive ? "text-[#f4f4f6]" : "bg-inherit"}`}>Markets</span>}
				</NavLink>
				<NavLink to="trade">
					{({ isActive }) => <span className={`hidden  sm:flex ${isActive ? "text-[#f4f4f6]" : "bg-inherit"}`}>Trade</span>}
				</NavLink>
				<div aria-label="search" className="m-0 bg-[#202126] overflow-hidden rounded-xl md:flex px-3 items-center hidden ">
					<img src={SearchIcon} alt="search" className="h-4 w-4" />
					<input type="text" placeholder="Search markets" className="bg-inherit  pl-2 py-1 outline-none" />
				</div>
			</div>
			<div>
				<Link
					to="signup"
					className="my-auto text-nowrap rounded-lg bg-[#142d25] px-3 py-1.5 text-sm font-semibold text-[#00c278] hover:opacity-90"
				>
					Sign up
				</Link>
				<Link
					to="signin"
					className="my-auto ml-10 text-nowrap rounded-lg bg-[#18253b] px-3 py-1.5 text-sm font-semibold text-[#4c94ff] hover:opacity-90"
				>
					Sign in
				</Link>
			</div>
		</div>
	);
};

export default Appbar;

