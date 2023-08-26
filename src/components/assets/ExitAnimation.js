import { motion, AnimatePresence } from "framer-motion";
const ExitAnimation = ({ myKey }) => {
	return (
		<AnimatePresence>
			<motion.div
				key={myKey}
				initial={{ width: "100%" }}
				animate={{ width: 0 }}
				exit={{ width: "100%" }}
				className="h-screen w-screen bg-black z-50 fixed top-0 left-0"></motion.div>
		</AnimatePresence>
	);
};

export default ExitAnimation;
