import { m } from "framer-motion";

const Overlay = () => {
	return (
		<>
			<m.div
				id="overlay"
				className="fixed w-screen z-10 h-screen bg-black/0 backdrop-blur-0">
				{/* Nothing to see here */}
			</m.div>
		</>
	);
};

export default Overlay;
