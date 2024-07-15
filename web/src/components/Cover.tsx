import React from "react";
// import Cover1 from "../assets/images/cover1.png";
import Cover2 from "../assets/images/cover2.png";

const Cover: React.FC = () => {
	return (
		<div className="rounded-xl overflow-hidden">
			{/* <img src={Cover1} alt="" /> */}
			<img src={Cover2} alt="" />
		</div>
	);
};

export default Cover;

