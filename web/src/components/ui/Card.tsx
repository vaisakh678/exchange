import React from "react";

const Card: React.FC = () => {
	return (
		<div className="bg-[#14151c] p-5 rounded w-full">
			<h4 className="mb-2">Top Gainers</h4>
			<ul className="space-y-2">
				<li className="w-full flex">
					<span className="w-full">USDT</span>
					<span className="w-[30%] text-right">$0</span>
					<span className="w-[30%] text-right">-</span>
				</li>
				<li className="w-full flex">
					<span className="w-full">USDT</span>
					<span className="w-[30%] text-right">$0</span>
					<span className="w-[30%] text-right">-</span>
				</li>
				<li className="w-full flex">
					<span className="w-full">USDT</span>
					<span className="w-[30%] text-right">$0</span>
					<span className="w-[30%] text-right">-</span>
				</li>
			</ul>
		</div>
	);
};

export default Card;

