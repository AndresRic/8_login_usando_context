import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import styles from "./SubmitButton.module.css";

export const SubmitButton = () => {
	const { User, setNewUser, UserToValidate } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (User === null) return;

		navigate("/userinfo");
	}, [User]);

	const handClick = (event) => {
		event.preventDefault();
		console.log("handClick");
		//simulamos respuestad el backend resp=backend(UserToValidate)
		const resp = {
			id: 1,
			name: "ricardo",
			lasName: "muñoz",
			age: 34,
			genre: "male",
			email: "ricardo@google.com",
			password: "12345",
			pet: {
				especie: "perro",
				raza: "golden retriever",
				edad: 7,
			},
		};

		if (!resp) return;
		else setNewUser(resp);
	};

	return (
		<button className={styles.submitButton} onClick={handClick}>
			{"LOGIN"}
		</button>
	);
};
