import React, { useId } from "react";

interface ExCheckboxProps {
	label?: string;
}

const ExCheckbox: React.FC<ExCheckboxProps> = ({ label }) => {
	const id = useId();
	return (
		<div className="flex items-center">
			<input
				type="checkbox"
				className="mr-2 appearance-none w-5 h-5 rounded text-white flex items-center justify-center border cursor-pointer border-[#323337] "
				id={id}
			/>
			<label htmlFor={id} className="text-xs">
				{label}
			</label>
		</div>
	);
};

export default ExCheckbox;

