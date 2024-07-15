import React, { useState } from "react";
import TabButton from "./ui/TabButton";

const TreeView: React.FC = () => {
	const [view, setView] = useState<"trading-view" | "depth">("trading-view");
	return (
		<div className="tree-view">
			<div className="p-3 flex justify-between items-center">
				<span className="text-ex-gray">Chart</span>
				<div>
					<TabButton active={view === "trading-view"} onClick={() => setView("trading-view")}>
						Trading View
					</TabButton>
					<TabButton active={view === "depth"} onClick={() => setView("depth")}>
						Depth
					</TabButton>
				</div>
			</div>
		</div>
	);
};

export default TreeView;

