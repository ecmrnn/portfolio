import Emoji from "../assets/Emoji";
import transition from "../../transition";
import {
	FaceOutlined,
	HistoryEduOutlined,
	IntegrationInstructionsOutlined,
	SubdirectoryArrowRightOutlined,
	VerifiedOutlined,
} from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

const About = () => {
	const details = [
		{
			id: 0,
			icon: FaceOutlined,
			header: "personal infos.",
			content: [
				{
					id: 1,
					label: "name",
					labelValue: 'Emanuelle Christian "EC" Maranan',
				},
				{
					id: 2,
					label: "age",
					labelValue: "21 yrs. old",
				},
				{
					id: 3,
					label: "residency",
					labelValue: "Pililla, Rizal, Philippines",
				},
			],
		},
		{
			id: 4,
			icon: HistoryEduOutlined,
			header: "education",
			content: [
				{
					id: 5,
					label: "2020 - 2022",
					labelValue:
						"Far Eastern University Institute of Technology",
					labelValue2: "BSIT Major in Web and Mobile Application",
				},
				{
					id: 6,
					label: "2022 - now",
					labelValue: "University of the East - Manila",
					labelValue2: "BSIT",
				},
			],
		},
		{
			id: 7,
			icon: IntegrationInstructionsOutlined,
			header: "my stack",
			content: [
				{
					id: 8,
					label: "front-end",
					labelValue: "ReactJS",
					labelValue2: "TailwindCSS",
					labelValue3: "Material UI",
				},
			],
		},
	];
	const certifications = [
		{
			id: 9,
			icon: VerifiedOutlined,
			header: "certifications",
			content: [
				{
					id: 10,
					topic: "databases",
					program: "Information Technology Specialist",
					certProvider: "Certiport",
					dateAcquired: "March 16, 2022",
					fileLoc: "ITS_Certiport_Databases.pdf",
				},
			],
		},
	];
	return (
		<>
			<section
				id="content"
				className="z-20 relative">
				<div className="w-full absolute top-0">
					{/* header */}
					<header className="mb-[50px] flex items-center w-full justify-between">
						<div>
							<h1 className="text-6xl">
								about me.{" "}
								<Emoji
									symbol="😀"
									label="grinning face"
								/>
							</h1>
						</div>
						<div className="flex gap-5">
							<div className="lines w-[230px]"></div>
							<div className="lines w-5"></div>
							<div className="lines w-5"></div>
							<div className="lines w-5"></div>
						</div>
					</header>
					{/* content */}
					<div className="w-full flex gap-5 justify-between">
						{/* about me */}
						<div>
							{details.map(({ id, icon, header, content }) => (
								<div key={id}>
									<div className="flex items-center gap-5">
										<SvgIcon
											component={icon}
											fontSize="small"
										/>
										<h2>{header}</h2>
										<div className="w-[50px] h-[2px] rounded-[2px] bg-black"></div>
									</div>
									<div className="ml-10 mt-5">
										{content.map(
											({
												id,
												label,
												labelValue,
												labelValue2,
												labelValue3,
											}) => (
												<div
													key={id}
													className="mb-[5px] flex gap-5 last-of-type:mb-5">
													<SvgIcon
														component={
															SubdirectoryArrowRightOutlined
														}
														fontSize="small"
													/>
													<span className="w-24 shrink-0">
														{label}
													</span>
													<span>:</span>
													<div>
														<span>
															{labelValue}
														</span>
														{labelValue2 && (
															<div>
																{labelValue2}
															</div>
														)}
														{labelValue3 && (
															<div>
																{labelValue3}
															</div>
														)}
													</div>
												</div>
											)
										)}
									</div>
								</div>
							))}
							{certifications.map(
								({ id, icon, header, content }) => (
									<div key={id}>
										<div className="flex items-center gap-5">
											<SvgIcon
												component={icon}
												fontSize="small"
											/>
											<h2>{header}</h2>
											<div className="w-[50px] h-[2px] rounded-[2px] bg-black"></div>
										</div>
										<div className="ml-10 mt-5">
											{content.map(
												({
													id,
													topic,
													program,
													certProvider,
													dateAcquired,
													fileLoc,
												}) => (
													<div
														key={id}
														className="mb-[5px] flex gap-5 last-of-type:mb-5">
														<SvgIcon
															component={
																SubdirectoryArrowRightOutlined
															}
															fontSize="small"
														/>
														<span className="w-24">
															{topic}
														</span>
														<span>:</span>
														<a
															href={`/certificates/${fileLoc}`}
															rel="noreferrer"
															target="_blank"
															className="group text-left flex gap-[5px]">
															<div className="group-hover:w-8 transition-all flex w-0 overflow-hidden items-center justify-center text-white bg-black">
																<p className="-rotate-90 leading-none">
																	view
																</p>
															</div>
															<div>
																<p>{program}</p>
																<p>
																	{
																		certProvider
																	}
																</p>
																<p>
																	{
																		dateAcquired
																	}
																</p>
															</div>
														</a>
													</div>
												)
											)}
										</div>
									</div>
								)
							)}
						</div>
						{/* gallery */}
						<div className="flex flex-col gap-5 self-start sticky top-0">
							<div className="w-[500px] aspect-video bg-black/10"></div>
							<div className="grid grid-cols-2 gap-5">
								<div className="aspect-video bg-black/10"></div>
								<div className="aspect-video bg-black/10"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default transition(About);
