import React, { useState } from "react";
import TabButton from "./ui/TabButton";

const BuySell: React.FC = () => {
	const [orderType, setOrderType] = useState<"limit" | "market">("limit");
	return (
		<div className="buy-sell">
			<div className="w-full h-[60px]">BuySell</div>
			<div>
				<TabButton active={orderType === "limit"} onClick={() => setOrderType("limit")}>
					Limit
				</TabButton>
				<TabButton active={orderType === "market"} onClick={() => setOrderType("market")}>
					Market
				</TabButton>
			</div>
			<div className="p-3 text-xs">
				<div className="flex items-center justify-between">
					<p className="text-ex-gray">Available Balance</p>
					<p>0.00 RENDER</p>
				</div>
			</div>

			<ul>
				<li>item 1</li>
				<li>item 1</li>
				<li>item 1</li>
				<li>item 1</li>
				<li>item 1</li>
				<li>item 1</li>
				<li>item 1</li>
				<li>item 1</li>
				<li>item 1</li>
				<li>item 1</li>
				<li>item 1</li>
				<li>item 1</li>
				<li>item 1</li>
			</ul>
		</div>
	);
};

export default BuySell;

