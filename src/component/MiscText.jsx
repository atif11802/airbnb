import React from "react";
import "../styles/MisctText.css";

const MiscText = ({ text1, text2 }) => {
	return (
		<div className="miscText">
			<p>{text1}</p>
			<p>{text2}</p>
		</div>
	);
};

export default MiscText;
