import Emoji from "../assets/Emoji";

const Home = () => {
	return (
		<section
			id="content"
			className="z-20 relative">
			<div>
				<p className="font-montserrat text-6xl">
					hello~
					<Emoji
						symbol="👋"
						label="waving hand"
					/>
				</p>
				<h1 className="text-9xl leading-tight">i am ec.</h1>
				<p className="font-montserrat text-6xl">front-end dev.</p>
			</div>
			{/* lines */}
			<div className="absolute top-0 right-0 flex flex-col items-end">
				<div className="flex gap-5">
					<div className="lines w-[230px]"></div>
					<div className="lines w-5"></div>
					<div className="lines w-5"></div>
					<div className="lines w-5"></div>
				</div>
				<div className="lines mt-5 w-[230px]"></div>
			</div>
		</section>
	);
};

export default Home;
