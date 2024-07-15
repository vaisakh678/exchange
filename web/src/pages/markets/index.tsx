import React from "react";
import Table from "../../components/Table";
import Card from "../../components/ui/Card";
import Cover from "../../components/Cover";

const Markets: React.FC = () => {
	return (
		<div className="flex flex-col px-4 md:px-28">
			<Cover />
			<h1 className="py-5 font-bold text-3xl">Markets</h1>
			<div className="flex flex-col md:flex-row gap-6 mb-7">
				<Card />
				<Card />
				<Card />
			</div>
			<Table />
		</div>
	);
};

export default Markets;

