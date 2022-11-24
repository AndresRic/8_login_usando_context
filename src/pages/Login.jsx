import { LoginForm } from "../components/organisms/LoginForm/LoginForm";
import styles from "./Login.module.css";

export const Login = () => {
	return (
		<div className={styles.loginPage}>
			<div className={styles.loginCard}>
				<div className={styles.userIconContainer}>
					<img src="../../public/images/userIcon.png" />
				</div>

				<LoginForm />
			</div>
		</div>
	);
};
