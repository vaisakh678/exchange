import React from "react";

interface IExgButtonProps {
	children: React.ReactNode;
	active?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const ExgButton: React.FC<IExgButtonProps> = ({ children, active, onClick }) => {
	return (
		<button onClick={onClick} className={`${active ? "bg-[#111f3b] text-[#4789ec]" : "text-ex-gray"} py-1 px-3 rounded-lg`}>
			{children}
		</button>
	);
};

export default ExgButton;

