import React from "react";

interface OrderButtonProps {
	className?: string;
	children: React.ReactNode;
}

const OrderButton: React.FC<OrderButtonProps> = ({ children, className }) => {
	return (
		<button
			className={
				className +
				" font-semibold focus:ring-blue-200 focus:none focus:outline-none hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 text-center text-black bg-ex-white h-12 rounded-xl text-base px-4 py-2"
			}
		>
			{children}
		</button>
	);
};

export default OrderButton;

