import { motion } from "framer-motion";

const transition = (OgComponent) => {
	const duration = 0.75;
	return () => (
		<>
			<OgComponent />
			<motion.div
				className="z-[999] fixed top-0 left-0 h-screen w-0 bg-black"
				initial={{ width: 0 }}
				animate={{ width: 0 }}
				exit={{ width: "100%" }}
				transition={{
					duration: duration,
					ease: [0.22, 1, 0.36, 1],
				}}></motion.div>
			<motion.div
				className="z-[999] fixed top-0 left-0 h-screen w-0 bg-black"
				initial={{ width: "100%" }}
				animate={{ width: 0 }}
				exit={{ width: 0 }}
				transition={{
					duration: duration,
					ease: [0.22, 1, 0.36, 1],
				}}></motion.div>
			{/* <motion.div
				className="z-[999] fixed top-0 left-0 h-screen w-screen bg-black origin-bottom"
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{
					duration: duration,
					ease: [0.22, 1, 0.36, 1],
				}}></motion.div>
			<motion.div
				className="z-[999] fixed top-0 left-0 h-screen w-screen bg-black origin-top"
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{
					duration: duration,
					ease: [0.22, 1, 0.36, 1],
				}}></motion.div> */}
		</>
	);
};

export default transition;
