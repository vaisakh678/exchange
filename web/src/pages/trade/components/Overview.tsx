import React from "react";

const Overview: React.FC = () => {
	return (
		<div className="overview h-[60px] w-full border-y border-[#202126] flex items-center px-4 space-x-8 text-[#969faf]">
			<h1 className="text-[#f4f4f6] font-medium text-base">SOL/USDT</h1>
			<div>
				<p className="text-[#00c278] text-xl">150.38</p>
				<p className="text-[#f4f4f6] text-sm">$150.96</p>
			</div>
			<div>
				<p className="font-medium text-xs leading-3 text-baseTextMedEmphasis">24H Change</p>
				<p className="mt-1 text-sm font-medium tabular-nums leading-5 text-baseTextHighEmphasis text-greenText text-[#00c278]">
					+6.63 +4.61%
				</p>
			</div>
			<div>
				<p className="font-medium text-xs leading-3 text-baseTextMedEmphasis">24H High</p>
				<p className="mt-1 text-sm font-medium tabular-nums leading-5 text-baseTextHighEmphasis text-greenText text-[#f4f4f6]">150.99</p>
			</div>
			<div>
				<p className="font-medium text-xs leading-3 text-baseTextMedEmphasis">24H Low</p>
				<p className="mt-1 text-sm font-medium tabular-nums leading-5 text-baseTextHighEmphasis text-greenText text-[#f4f4f6]">143.26</p>
			</div>
			<div>
				<p className="font-medium text-xs leading-3 text-baseTextMedEmphasis">24H Volume (SOL)</p>
				<p className="mt-1 text-sm font-medium tabular-nums leading-5 text-baseTextHighEmphasis text-greenText text-[#f4f4f6]">22,274.63</p>
			</div>
		</div>
	);
};

export default Overview;

