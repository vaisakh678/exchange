import React, { useEffect, useRef, useState } from "react";
import TabButton from "./ui/TabButton";
import OrderBookItem from "./ui/OrderBookItem";

const Orderbook: React.FC = () => {
	const [selected, setSelected] = useState<"book" | "trade">("book");
	return (
		<div className="orderbook flex flex-col">
			<div className="py-2">
				<TabButton active={selected === "book"} onClick={() => setSelected("book")}>
					Book
				</TabButton>
				<TabButton active={selected === "trade"} onClick={() => setSelected("trade")}>
					Trade
				</TabButton>
			</div>
			{selected === "book" ? <OrderbookList /> : null}
		</div>
	);
};

const OrderbookList = () => {
	const listRef = useRef<HTMLUListElement | null>(null);

	useEffect(() => {
		centerList();
		if (!listRef.current) return;
	}, []);

	const centerList = () => {
		const container = listRef?.current?.parentElement;
		const list = listRef.current;
		if (!list || !container) return;
		list.scrollTop = list.scrollHeight / 2 - container.clientHeight / 2;
	};

	return (
		<div className="h-full flex flex-col">
			<div className="text-xs flex mb-2 p-3 pb-0">
				<p className="w-[30%]">Price (USDC)</p>
				<p className="w-[30%] text-right text-ex-gray">Size (SOL)</p>
				<p className="w-[40%] text-right text-ex-gray">Total (SOL)</p>
			</div>
			<div className="relative flex-1">
				<ul className="overflow-auto absolute h-full w-full scrollbar-none" ref={listRef}>
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />
					<OrderBookItem progress1={0} progress2={0} type="bid" />

					<li className="flex justify-between p-3 py-1">
						<p className="text-[#fd4b4e] text-lg">152.65</p>
						<button className="text-sm text-blue-500 hover:text-blue-600" onClick={() => centerList()}>
							Recenter
						</button>
					</li>

					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
					<OrderBookItem progress1={0} progress2={0} type="ask" />
				</ul>
			</div>
		</div>
	);
};

export default Orderbook;

