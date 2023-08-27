import Emoji from "../assets/Emoji";
import transition from "../../transition";

const Home = () => {
	return (
		<>
			<section
				id="content"
				className="z-20 relative">
				<div>
					<div className="overflow-hidden">
						<p className="font-montserrat text-6xl">
							hello~
							<Emoji
								symbol="👋"
								label="waving hand"
							/>
						</p>
					</div>
					<div className="overflow-hidden">
						<h1 className="text-9xl leading-tight">i am ec.</h1>
					</div>
					<div className="overflow-hidden">
						<p className="font-montserrat text-6xl">
							front-end dev.
						</p>
					</div>
				</div>
				{/* lines */}
				<div className="overflow-hidden absolute top-0 right-0 flex flex-col items-end">
					<div className="flex gap-5">
						<div className="lines w-[230px]"></div>
						<div className="lines w-5"></div>
						<div className="lines w-5"></div>
						<div className="lines w-5"></div>
					</div>
					<div className="overflow-hidden">
						<div className="lines mt-5 w-[230px]"></div>
					</div>
				</div>
			</section>
		</>
	);
};

export default transition(Home);
