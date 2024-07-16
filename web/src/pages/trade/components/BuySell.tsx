import React, { useState } from "react";
import TabButton from "./ui/TabButton";
import Input from "../../../components/ui/Input";
import OrderButton from "../../../components/ui/OrderButton";
import ExCheckbox from "../../../components/ui/ExCheckbox";

const BuySell: React.FC = () => {
	const [side, setSide] = useState<"buy" | "sell">("buy");
	const [orderType, setOrderType] = useState<"limit" | "market">("limit");
	return (
		<div className="buy-sell">
			<div className="w-full h-[60px]">
				<button
					className={`h-full w-1/2 font-medium text-sm text-[#00c278] border-b-2 ${
						side === "buy" ? "bg-[#111d1c] border-[#1a5e42]" : "border-[#323337] hover:border-ex-white"
					}`}
					onClick={() => setSide("buy")}
				>
					Buy
				</button>
				<button
					className={`h-full w-1/2 font-medium text-sm text-[#fd4b4e] border-b-2 ${
						side === "sell" ? "bg-[#29151a] border-[#8a272c]" : "border-[#323337] hover:border-ex-white"
					}`}
					onClick={() => setSide("sell")}
				>
					Sell
				</button>
			</div>
			<div className="mt-2">
				<TabButton active={orderType === "limit"} onClick={() => setOrderType("limit")}>
					Limit
				</TabButton>
				<TabButton active={orderType === "market"} onClick={() => setOrderType("market")}>
					Market
				</TabButton>
			</div>
			<div className="p-3">
				<div className="flex items-center text-xs justify-between mb-2.5">
					<p className="text-ex-gray">Available Balance</p>
					<p>0.00 RENDER</p>
				</div>
				{orderType === "limit" ? <LimitOrder /> : null}
				{orderType === "market" ? <MarketOrder /> : null}
			</div>
		</div>
	);
};

const LimitOrder: React.FC = () => {
	return (
		<div className="">
			<Input label="Price" className="mb-2.5" placeholder="0" />
			<Input label="Quantity" helperText="≈ 0.00 USDC" placeholder="0" />
			<OrderButton className="w-full my-2">Sign up to trade</OrderButton>
			<div className="flex gap-4 my-2">
				<ExCheckbox label="Post Only" />
				<ExCheckbox label="IOC" />
			</div>
		</div>
	);
};

const MarketOrder: React.FC = () => {
	return (
		<div>
			<Input label="Order Value" className="mb-2.5" placeholder="0" />
			<OrderButton className="w-full my-2">Sign up to trade</OrderButton>
			<ul className="mt-2 space-y-1 text-xs font-medium">
				<li className="flex items-center justify-between">
					<p className="text-ex-gray">Limit Price</p>
					<p className="text-ex-white">162</p>
				</li>
				<li className="flex items-center justify-between">
					<p className="text-ex-gray">Limit Quantity</p>
					<p className="text-ex-white">-</p>
				</li>
				<li className="flex items-center justify-between">
					<p className="text-ex-gray">Order Value</p>
					<p className="text-ex-white">-</p>
				</li>
			</ul>
		</div>
	);
};

export default BuySell;

