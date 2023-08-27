import "./App.css";
// Pages
import Menu, { Navigation } from "./components/assets/Menu";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
// Assets
import Overlay from "./components/assets/Overlay";
// Packages
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<main className="w-screen h-screen grid place-items-center">
			{/* main ui */}
			<Navigation />
			<Menu />
			<Overlay />
			<BigEc />
			<AnimatePresence
				initial={false}
				mode="wait">
				<Routes
					location={location}
					key={location.pathname}>
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
			</AnimatePresence>
		</main>
	);
}

export default App;

const BigEc = () => {
	return (
		<div
			id="ecBg"
			className="transition-all duration-500 fixed -bottom-80 left-20">
			<p className=" text-[512px] opacity-5 font-montserrat select-none">
				ec
			</p>
		</div>
	);
};
