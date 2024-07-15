import React, { useState } from "react";
import ExgButton from "./ui/ExgButton";

const Table: React.FC = () => {
	const [filter, setFilter] = useState<"all" | "spot" | "exp" | "fav">("all");

	return (
		<section>
			<div className="flex justify-between max-w-[350px] overflow-scroll">
				<ExgButton active={filter === "all"} onClick={() => setFilter("all")}>
					All
				</ExgButton>
				<ExgButton active={filter === "spot"} onClick={() => setFilter("spot")}>
					Spot
				</ExgButton>
				<ExgButton active={filter === "exp"} onClick={() => setFilter("exp")}>
					Experimental
				</ExgButton>
				<ExgButton active={filter === "fav"} onClick={() => setFilter("fav")}>
					Favorites
				</ExgButton>
			</div>
			<div className="bg-[#14151c] my-3 py-3 rounded-lg overflow-scroll">
				<table className="w-full text-nowrap">
					<thead>
						<tr className="border-b border-[#202126]">
							<th className="font-normal text-left px-2 py-3 pl-7 text-ex-gray">Name</th>
							<th className="font-normal text-left px-2 py-3 pl-7 text-ex-gray">Price</th>
							<th className="font-normal text-left px-2 py-3 pl-7 text-ex-gray">Market Cap</th>
							<th className="font-normal text-left px-2 py-3 pl-7 text-ex-gray">24hr Volume</th>
							<th className="font-normal text-left px-2 py-3 pl-7 text-ex-gray">24hr Change</th>
							<th className="font-normal text-left px-2 py-3 pl-7 text-ex-gray">24hr Price</th>
						</tr>
					</thead>
					<tbody>
						{Array(30)
							.fill(0)
							.map((_, idx) => {
								return (
									<tr key={idx} className="border-b border-[#202126] hover:bg-[#1d1e25] cursor-pointer last:border-none">
										<th className="font-normal text-left px-2 py-3 h-[70px] pl-7 text-ex-white">Bitcoin</th>
										<th className="font-normal text-left px-2 py-3 h-[70px] pl-7 text-ex-white">$1.7716</th>
										<th className="font-normal text-left px-2 py-3 h-[70px] pl-7 text-ex-white">Market Cap</th>
										<th className="font-normal text-left px-2 py-3 h-[70px] pl-7 text-ex-white">24hr Volume</th>
										<th className="font-normal text-left px-2 py-3 h-[70px] pl-7 text-ex-white">24hr Change</th>
										<th className="font-normal text-left px-2 py-3 h-[70px] pl-7 text-ex-white">24hr Price</th>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default Table;

