import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const UserInfo = () => {
	const { User } = useContext(UserContext);
	return <code>{JSON.stringify(User)}</code>;
};
