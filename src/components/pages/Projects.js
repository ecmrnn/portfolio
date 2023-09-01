import { useState } from "react";
import Emoji from "../assets/Emoji";
import transition from "../../transition";
import { m, AnimatePresence } from "framer-motion";
import {
	DataArray,
	DateRangeOutlined,
	DescriptionOutlined,
	FullscreenOutlined,
	GitHub,
	Looks3Outlined,
	Looks4Outlined,
	LooksOneOutlined,
	LooksTwoOutlined,
	NavigateNextOutlined,
	SubdirectoryArrowRightOutlined,
} from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

const Projects = () => {
	const [activeProject, setActiveProject] = useState(0);
	const techStack = ["ReactJS", "Tailwind CSS", "Material UI", "PHP"];
	const projects = [
		{
			id: 0,
			icon: LooksOneOutlined,
			title: "Project Title 1",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			startDate: "January 1, 2023",
			endDate: "March 1, 2023",
			thumbnail: "",
			github: "",
			live: "",
			stackUsed: [techStack[0], techStack[1]],
		},
		{
			id: 1,
			icon: LooksTwoOutlined,
			title: "Project Title 2",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			startDate: "January 2, 2023",
			endDate: "March 2, 2023",
			thumbnail: "",
			github: "",
			live: "",
			stackUsed: [techStack[0], techStack[1], techStack[2], techStack[3]],
		},
		{
			id: 2,
			icon: Looks3Outlined,
			title: "Project Title 3",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			startDate: "January 3, 2023",
			endDate: "March 3, 2023",
			thumbnail: "",
			github: "",
			live: "",
			stackUsed: [techStack[0], techStack[1], techStack[3]],
		},
		{
			id: 3,
			icon: Looks4Outlined,
			title: "Project Title 4",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			startDate: "January 4, 2023",
			endDate: "March 4, 2023",
			thumbnail: "",
			github: "",
			live: "",
			stackUsed: [techStack[0], techStack[1]],
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
								my projects.{" "}
								<Emoji
									symbol="💼"
									label="briefcase"
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
						{/* projects */}
						<div>
							{projects.map(
								({
									id,
									icon,
									title,
									description,
									startDate,
									endDate,
								}) => (
									<button
										key={id}
										className={
											id === activeProject
												? "text-left transiton-all duration-500 opacity-100"
												: "text-left transiton-all duration-500 scale-95 origin-left opacity-25"
										}
										onClick={() => setActiveProject(id)}>
										<div className="flex items-center gap-5">
											<SvgIcon
												component={icon}
												fontSize="small"
											/>
											<h2>{title}</h2>
											<div
												className={
													id === activeProject
														? "transition-all duration-500 w-[50px] h-[2px] rounded-[2px] bg-black"
														: "transition-all duration-500 w-[25px] h-[2px] rounded-[2px] bg-black"
												}></div>
										</div>
										<div className="ml-10 mt-5">
											<div className="mb-[5px] flex gap-5 last-of-type:mb-5">
												<SvgIcon
													component={
														SubdirectoryArrowRightOutlined
													}
													fontSize="small"
												/>
												<span className="w-24 shrink-0">
													description
												</span>
												<span>:</span>
												<div className="max-w-lg">
													<span>{description}</span>
												</div>
											</div>
											<div className="mb-[5px] flex gap-5 last-of-type:mb-5">
												<SvgIcon
													component={
														SubdirectoryArrowRightOutlined
													}
													fontSize="small"
												/>
												<span className="w-24 shrink-0">
													date comp.
												</span>
												<span>:</span>
												<div>
													<span>
														{startDate} - {endDate}
													</span>
												</div>
											</div>
										</div>
									</button>
								)
							)}
						</div>
						{/* more info. */}
						<AnimatePresence initial={false}>
							<div className="flex self-start sticky top-0">
								<div className="h-full p-5 w-[500px] bg-black/5">
									<div className="flex flex-col gap-5">
										<div className="w-full bg-white aspect-video relative">
											<button className="absolute p-2 top-0 right-0 rounded-none bg-white transition-all duration-500 grid place-items-center">
												<SvgIcon
													component={
														FullscreenOutlined
													}
												/>
											</button>
											<div className="absolute flex justify-between bottom-0 w-full rounded-none backdrop-blur-md transition-all duration-500">
												<div className="flex items-stretch">
													<button className="p-2 flex items-center transition-all duration-500">
														<SvgIcon
															color="inherit"
															fontSize="small"
															component={GitHub}
														/>
													</button>
													<button className="group p-2 flex items-center transition-all duration-500 relative">
														<p className="transition-all duration-500 text-xs uppercase opacity-25 group-hover:opacity-100">
															live demo
														</p>
													</button>
												</div>
												<button
													className="group flex gap-2 items-center"
													onClick={() => {
														setActiveProject(
															activeProject === 3
																? 0
																: activeProject +
																		1
														);
													}}>
													<p className="group-hover:opacity-100 transition-all duration-500 text-xs uppercase opacity-25">
														next proj.
													</p>
													<div className="p-2 flex items-center transition-all duration-500">
														<SvgIcon
															color="inherit"
															fontSize="small"
															component={
																NavigateNextOutlined
															}
														/>
													</div>
												</button>
											</div>
										</div>
										<div className="transition-all duration-500 flex gap-5 items-center">
											<div className="overflow-hidden">
												<m.div
													key={
														projects[activeProject]
															.id
													}
													initial={{ scale: 0 }}
													animate={{ scale: 1 }}
													exit={{ scale: 0 }}>
													<SvgIcon
														component={
															projects[
																activeProject
															].icon
														}
														fontSize="small"
													/>
												</m.div>
											</div>
											<div className="overflow-hidden">
												<m.p
													key={
														projects[activeProject]
															.id
													}
													initial={{ x: "100%" }}
													animate={{ x: 0 }}
													exit={{ x: "100%" }}
													className="font-montserrat">
													{
														projects[activeProject]
															.title
													}
												</m.p>
											</div>
											<div className="w-[50px] h-[2px] rounded-[2px] bg-black"></div>
										</div>
										<div className="flex gap-5">
											<SvgIcon
												component={DescriptionOutlined}
												fontSize="small"
											/>
											<div className="overflow-hidden">
												<m.p
													key={
														projects[activeProject]
															.id
													}
													initial={{ x: "100%" }}
													animate={{ x: 0 }}
													exit={{ x: "100%" }}>
													{
														projects[activeProject]
															.description
													}
												</m.p>
											</div>
										</div>
										<div className="flex gap-5 items-center">
											<SvgIcon
												component={DateRangeOutlined}
												fontSize="small"
											/>
											<div className="overflow-hidden">
												<m.div
													key={
														projects[activeProject]
															.id
													}
													initial={{ x: "100%" }}
													animate={{ x: 0 }}
													exit={{ x: "100%" }}>
													<p className="inline">
														{
															projects[
																activeProject
															].startDate
														}
													</p>{" "}
													-{" "}
													<p className="inline">
														{
															projects[
																activeProject
															].endDate
														}
													</p>
												</m.div>
											</div>
										</div>
										<div className="flex gap-5 items-center">
											<SvgIcon
												component={DataArray}
												fontSize="small"
											/>
											<div className="flex gap-2">
												{projects[
													activeProject
												].stackUsed.map((tech) => (
													<span
														key={tech}
														className="transition-all duration-500 delay-500 bg-black text-white p-1 px-2 rounded-md">
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</AnimatePresence>
					</div>
				</div>
			</section>
		</>
	);
};

export default transition(Projects);
