import React from "react";

export const PasswordInput = () => {
	return (
		<div className="passwordContainer">
			<div className="inputIconoContainer">
				<img
					className="icono"
					src="../../public/images/userIcon.png"
					alt="icono email"
				/>
			</div>
			<input type="text" placeholder="Password" />
		</div>
	);
};
