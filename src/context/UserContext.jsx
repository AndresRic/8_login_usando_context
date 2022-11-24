import { createContext, useState } from "react";

export const UserContext = createContext();

//ESTRUCTURA DE USUARIO
const demoUser = {
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

//ESTRUCTURA DE USUARIO
const demoUserToValidate = {
	email: "",
	password: "",
};

export const UserProvider = ({ children }) => {
	const [User, setUser] = useState(null);
	const [UserToValidate, setUserToValidate] = useState(demoUserToValidate);

	const setNewUser = (newUser) => {
		setUser(newUser);
	};
	const setUserName = (name) => {
		setUser({ ...User, name });
	};
	const setUserEmail = (email) => {
		setUser({ ...User, email });
	};
	const setUserPassword = (password) => {
		setUser({ ...User, password });
	};

	const setUserToValidateEmail = (email) => {
		//hacer todas las validaciones requeridas
		setUserToValidate({ ...UserToValidate, email });
	};

	const setUserToValidatePassword = (password) => {
		//hacer todas las validaciones requeridas
		setUserToValidate({ ...UserToValidate, password });
	};

	const data = {
		User,
		setNewUser,
		setUserName,
		setUserEmail,
		setUserPassword,
		UserToValidate,
		setUserToValidateEmail,
		setUserToValidatePassword,
	};

	return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
