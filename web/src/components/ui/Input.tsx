import React, { useId } from "react";

interface InputProps {
	label?: string;
	placeholder?: string;
	helperText?: string;
	value?: string | number;
	className?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ onChange, className, helperText, value, placeholder, label }) => {
	const id = useId();
	return (
		<div className={className + " flex flex-col rounded"}>
			{label && (
				<label className="text-xs text-ex-gray mb-2" htmlFor={id}>
					{label}
				</label>
			)}
			<input
				type="text"
				onChange={onChange}
				value={value}
				className="border-2 border-[#202126] rounded-xl bg-inherit focus:outline-none focus:border-[#4c94ff] focus:ring-[#4c94ff] text-2xl p-2 px-3 text-right"
				placeholder={placeholder}
				id={id}
			/>
			{helperText && <p className="text-sm text-ex-gray mt-1.5 text-right">{helperText}</p>}
		</div>
	);
};

export default Input;

