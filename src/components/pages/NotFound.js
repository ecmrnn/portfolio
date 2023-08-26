import Emoji from "../assets/Emoji";

const NotFound = () => {
	const missingLink = window.location.pathname;
	return (
		<>
			<section
				exit={{ opacity: 0 }}
				id="content"
				className="z-20">
				<div>
					<h1 className="text-6xl leading-tight">
						oof~ missing links!{" "}
						<Emoji
							symbol="🥲"
							label="teary face"
						/>
					</h1>
					<p className="font-montserrat">
						<span className="p-2 text-white bg-black">
							{missingLink}
						</span>{" "}
						not found.{" "}
					</p>
				</div>
			</section>
		</>
	);
};

export default NotFound;
