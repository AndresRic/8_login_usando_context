import React, { useContext } from "react";
import styles from "./CustomInput.module.css";
import { UserContext } from "../../../context/UserContext";

export const CustomInput = ({ placeholder, pathIcon, type }) => {
	const {
		UserToValidate,
		setUserToValidateEmail,
		setUserToValidatePassword,
	} = useContext(UserContext);

	const handleChange = (event) => {
		console.log(event.target.value);
		if (type === "password") setUserToValidatePassword(event.target.value);
		else setUserToValidateEmail(event.target.value);
	};

	return (
		<div className={styles.inputContainer}>
			<div className={styles.inputIconoContainer}>
				<img className={styles.icono} src={pathIcon} alt="icono" />
			</div>
			<input
				type={type}
				value={
					type === "password"
						? UserToValidate?.password
						: UserToValidate?.name
				}
				placeholder={placeholder}
				className={styles.inputText}
				onChange={handleChange}
			/>
		</div>
	);
};
