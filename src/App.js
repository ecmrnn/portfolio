import "./App.css";
// Pages
import Menu, { Navigation } from "./components/assets/Menu";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
// Assets
import Overlay from "./components/assets/Overlay";
// Packages
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";

function App() {
	return (
		<main className="w-screen h-screen grid place-items-center">
			{/* main ui */}
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
					element={<About />}
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
