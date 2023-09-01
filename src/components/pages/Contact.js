import Emoji from "../assets/Emoji";
import transition from "../../transition";
import {
	AdUnitsOutlined,
	AlternateEmailOutlined,
	ContentCopyOutlined,
	EditNoteOutlined,
	LinkOutlined,
	NotesOutlined,
	SendOutlined,
	ShareOutlined,
	SmsOutlined,
	SubdirectoryArrowRightOutlined,
} from "@mui/icons-material";
// import { m, AnimatePresence } from "framer-motion";
import { SvgIcon } from "@mui/material";

const Contact = () => {
	const contacts = [
		{
			id: 0,
			label: "smart",
			number: "0968-5575-486",
		},
		{
			id: 1,
			label: "globe",
			number: "0926-2355-376",
		},
	];
	const socials = [
		{
			id: 2,
			label: "facebook",
			username: "ec maranan",
			link: "/",
		},
		{
			id: 3,
			label: "github",
			username: "ecmrnn",
			link: "/",
		},
		{
			id: 4,
			label: "linkedin",
			username: "emanuelle maranan",
			link: "/",
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
								let's talk!{" "}
								<Emoji
									symbol="📬"
									label="opened mail"
								/>
							</h1>
						</div>
						<div className="flex gap-5">
							<div className="lines w-[60px]"></div>
							<div className="lines w-5"></div>
							<div className="lines w-[230px]"></div>
						</div>
					</header>
					{/* content */}
					<div className="w-full flex gap-5 justify-between">
						{/* info */}
						<div className="max-w-md">
							<p className="text-justify">
								If you want to reach me, you may contact me at
								the following phone numbers or direct message me
								at the given social media sites below.
								Alternatively, you may send me an email directly
								using the form!
							</p>
							{/* phone # */}
							<div className="mt-10">
								<div className="flex items-center gap-5">
									<SvgIcon
										component={AdUnitsOutlined}
										fontSize="small"
									/>
									<h2>phone #</h2>
									<div className="w-[50px] h-[2px] rounded-[2px] bg-black"></div>
								</div>
								<div className="ml-10 mt-5">
									{contacts.map(({ id, label, number }) => (
										<div
											key={id}
											className="mb-[5px] flex gap-5 last-of-type:mb-5 relative">
											<SvgIcon
												component={
													SubdirectoryArrowRightOutlined
												}
												fontSize="small"
											/>
											<span className="w-20 shrink-0">
												{label}
											</span>
											<span>:</span>
											<span>{number}</span>
											<button className="absolute right-0">
												<SvgIcon
													component={
														ContentCopyOutlined
													}
													fontSize="small"
												/>
											</button>
										</div>
									))}
								</div>
							</div>
							{/* socials */}
							<div className="mt-10">
								<div className="flex items-center gap-5">
									<SvgIcon
										component={ShareOutlined}
										fontSize="small"
									/>
									<h2>socials</h2>
									<div className="w-[50px] h-[2px] rounded-[2px] bg-black"></div>
								</div>
								<div className="ml-10 mt-5">
									{socials.map(
										({ id, label, username, link }) => (
											<div
												key={id}
												className="mb-[5px] flex gap-5 last-of-type:mb-5 relative">
												<SvgIcon
													component={
														SubdirectoryArrowRightOutlined
													}
													fontSize="small"
												/>
												<span className="w-20 shrink-0">
													{label}
												</span>
												<span>:</span>
												<span>{username}</span>
												<button className="absolute right-0">
													<SvgIcon
														component={LinkOutlined}
														fontSize="small"
													/>
												</button>
											</div>
										)
									)}
								</div>
							</div>
						</div>
						{/* email */}
						<div className="flex self-start sticky top-0">
							<div className="h-full w-[500px]">
								<form
									action=""
									className="flex flex-col gap-5">
									<label
										htmlFor="email"
										className="bg-black/5 p-5 flex gap-5 items-center cursor-pointer">
										<SvgIcon
											component={AlternateEmailOutlined}
											fontSize="small"
											className="text-black/50"
										/>
										<input
											type="email"
											id="email"
											placeholder="your fancy email goes here."
											className="bg-transparent outline-none w-full cursor-pointer"
										/>
									</label>
									<label
										htmlFor="subject"
										className="bg-black/5 p-5 flex gap-5 items-center cursor-pointer">
										<SvgIcon
											component={SmsOutlined}
											fontSize="small"
											className="text-black/50"
										/>
										<input
											type="text"
											id="subject"
											placeholder="what you want to talk about?"
											className="bg-transparent outline-none w-full cursor-pointer"
										/>
									</label>
									<label
										htmlFor="subject"
										className="bg-black/5 p-5 flex gap-5 cursor-pointer">
										<SvgIcon
											component={EditNoteOutlined}
											fontSize="small"
											className="text-black/50 mt-1"
										/>
										<textarea
											type="text"
											id="subject"
											placeholder="your message."
											className="bg-transparent outline-none w-full cursor-pointer resize-none"
											rows="8"
										/>
									</label>
									<button
										type="submit"
										htmlFor="subject"
										className="bg-black p-5 px-6 flex gap-5 items-center cursor-pointer self-end">
										<p className="text-white">
											Send Message
										</p>
										<SvgIcon
											component={SendOutlined}
											fontSize="small"
											className="text-white"
										/>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default transition(Contact);
