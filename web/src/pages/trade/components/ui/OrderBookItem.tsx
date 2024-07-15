import React from "react";

interface IOrderBookItemProps {
	progress1?: number;
	progress2?: number;
	type: "ask" | "bid";
}

const OrderBookItem: React.FC<IOrderBookItemProps> = ({ progress1 = 0, progress2 = 0, type }) => {
	return (
		<li className="flex text-sm px-3 py-0.5 my-0.5 relative">
			<p className={`w-[30%] ${type === "bid" ? "text-[#df4448]" : ""}  ${type === "ask" ? "text-[#0eb06e]" : ""}`}>152.90</p>
			<p className="w-[30%] text-right">.20</p>
			<p className="w-[40%] text-right">620.10</p>
			<div
				className={`
					${type === "bid" ? "bg-[#361a1f]" : ""}  
					${type === "ask" ? "bg-[#142d25]" : ""} 
					 absolute h-full transition-[width] top-0 right-0 -z-40
					`}
				style={{ width: progress1 + "%" }}
			/>
			<div
				className={`
					${type === "bid" ? "bg-[#762a2d]" : ""} 
					${type === "ask" ? "bg-[#175c40]" : ""} 
					 absolute h-full transition-[width] top-0 right-0 -z-30
					`}
				style={{ width: progress2 + "%" }}
			/>
		</li>
	);
};

export default OrderBookItem;

