import { CustomInput } from "../../molecules/CustomInput/CustomInput";
import { SecurityOptions } from "../../molecules/SecurityOptions/SecurityOptions";
import { SubmitButton } from "../../atoms/SubmitButton/SubmitButton";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
	const handSubmit = () => {
		console.log("second");
	};

	return (
		<form action="submit" className={styles.loginForm}>
			<CustomInput
				placeholder={"Email"}
				pathIcon={"../../public/images/emailIcon.png"}
				type="text"
			/>
			<CustomInput
				placeholder={"Password"}
				pathIcon={"../../public/images/passwordIcon.png"}
				type="password"
			/>
			<SecurityOptions />
			<SubmitButton />
		</form>
	);
};
