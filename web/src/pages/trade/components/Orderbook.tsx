import React, { useState } from "react";
import TabButton from "./ui/TabButton";

const Orderbook: React.FC = () => {
	const [selected, setSelected] = useState<"book" | "trade">("book");
	return (
		<div className="orderbook">
			<div className="p-3">
				<TabButton active={selected === "book"} onClick={() => setSelected("book")}>
					Book
				</TabButton>
				<TabButton active={selected === "trade"} onClick={() => setSelected("trade")}>
					Trade
				</TabButton>
			</div>
		</div>
	);
};

export default Orderbook;

