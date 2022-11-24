import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { UserInfo } from "./pages/UserInfo";
import styles from "./App.module.css";
import { UserProvider } from "./context/UserContext";

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

function App() {
	return (
		<UserProvider value={null}>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/userinfo" element={<UserInfo />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</UserProvider>
	);
}

export default App;
