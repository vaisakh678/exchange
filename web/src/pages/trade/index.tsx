import React from "react";
import Overview from "./components/Overview";
import "./style.css";
import TreeView from "./components/TreeView";
import Orderbook from "./components/Orderbook";
import BuySell from "./components/BuySell";

const Trade: React.FC = () => {
	return (
		<div className="trade min-h-screen">
			<Overview />
			<TreeView />
			<Orderbook />
			<BuySell />
		</div>
	);
};

export default Trade;

