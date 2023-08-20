import "./App.css";
import Menu, { Navigation } from "./components/assets/Menu";
import Home from "./components/pages/Home";
import Overlay from "./components/assets/Overlay";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";

function App() {
	return (
		<main className="grid place-items-center h-screen">
			<Navigation />
			<Menu />
			<Overlay />
			<BigEC />

			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<Home />}
				/>
				<Route
					path="/projects"
					element={<Home />}
				/>
				<Route
					path="/contact"
					element={<Home />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</main>
	);
}

export default App;

const BigEC = () => {
	return (
		<div
			id="ecBg"
			className="fixed -bottom-80 left-20">
			<p className=" text-[512px] opacity-5 font-montserrat select-none">
				ec
			</p>
		</div>
	);
};
