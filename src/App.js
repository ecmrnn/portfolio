import "./App.css";
import Menu, { Navigation } from "./components/assets/Menu";
import Home from "./components/pages/Home";
import Overlay from "./components/assets/Overlay";

function App() {
	return (
		<main className="grid place-items-center h-screen">
			<Navigation />
			<Menu />
			<Overlay />
			<Home />
		</main>
	);
}

export default App;
