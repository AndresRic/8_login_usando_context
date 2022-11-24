import { NavLink } from "react-router-dom";
import { RetrievePassword } from "../../../pages/RetrievePassword";
import styles from "./SecurityOptions.module.css";

const SecurityOptions = () => {
	return (
		<div className={styles.SecurityOptions}>
			<div className={styles.rememberContainer}>
				<input
					type="checkbox"
					name="RememberMe"
					className={styles.rememberMe}
				/>
				<label htmlFor="RememberMe" className={styles.label}>
					Remember me
				</label>
			</div>
			<NavLink
				className={styles.retrievePasswordLink}
				to={"/retrievePassword"}
				element={<RetrievePassword />}
			>
				Forgot password ?
			</NavLink>
		</div>
	);
};

export { SecurityOptions };
