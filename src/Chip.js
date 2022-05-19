import React from "react";
import "./Chip.css";

function Chip(props) {
	return (
		<div className="chip">
			<div className="chip__avatar">
				<img
					src={`https://avatars.dicebear.com/api/avataaars/:seed${props.label}.svg`}
					width="100"
					height="100"
				/>
			</div>
			<div className="chip__label">
				<span>{props.label}</span>
			</div>
		</div>
	);
}

export default Chip;
