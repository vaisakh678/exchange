import React from "react";

interface ITabButtonProps {
	active?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
}

const TabButton: React.FC<ITabButtonProps> = ({ active, onClick, children }) => {
	return (
		<button
			className={`mx-2.5 py-0.5 ${
				active
					? "text-ex-white border-b-[#4c94ff]  border-b-2"
					: "text-[#939aaa] hover:text-ex-white hover:border-b-[#f4f4f6] hover:border-b-2 "
			}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default TabButton;

