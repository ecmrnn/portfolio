import {
	ArrowBackOutlined,
	BusinessCenterOutlined,
	CottageOutlined,
	FileDownloadOutlined,
	InfoOutlined,
	MarkEmailUnreadOutlined,
} from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

const Menu = () => {
	const openMenu = () => {
		let nav = document.querySelector("#navigation");
		let section = document.querySelector("#content");
		let overlay = document.querySelector("#overlay");

		nav.classList.remove("-translate-x-full");
		section.classList.add("translate-x-20");
		section.classList.remove("z-20");
		overlay.classList.remove("backdrop-blur-0");
		overlay.classList.add("backdrop-blur-md", "bg-black/50");
	};
	return (
		<button
			onClick={openMenu}
			className="group z-40 w-[50px] aspect-square fixed top-1/2 -translate-y-1/2 left-[50px] bg-black grid place-items-center">
			<div className="grid gap-[2px]">
				<div className="flex gap-[2px]">
					<div className="menu--dots group-hover:bg-white delay-[300ms]"></div>
					<div className="menu--dots group-hover:bg-white delay-[200ms]"></div>
					<div className="menu--dots group-hover:bg-white delay-[300ms]"></div>
				</div>
				<div className="flex gap-[2px]">
					<div className="menu--dots group-hover:bg-white delay-[200ms]"></div>
					<div className="menu--dots group-hover:bg-white delay-[100ms]"></div>
					<div className="menu--dots group-hover:bg-white delay-[200ms]"></div>
				</div>
				<div className="flex gap-[2px]">
					<div className="menu--dots group-hover:bg-white delay-[300ms]"></div>
					<div className="menu--dots group-hover:bg-white delay-[200ms]"></div>
					<div className="menu--dots group-hover:bg-white delay-[300ms]"></div>
				</div>
			</div>
		</button>
	);
};

export const Navigation = () => {
	const closeMenu = () => {
		let nav = document.querySelector("#navigation");
		let section = document.querySelector("#content");
		let overlay = document.querySelector("#overlay");

		nav.classList.add("-translate-x-full");
		section.classList.remove("translate-x-20");
		overlay.classList.remove("backdrop-blur-md", "bg-black/50");
		overlay.classList.add("backdrop-blur-0", "bg-black/0");

		setTimeout(() => {
			section.classList.add("z-20");
		}, 250);
	};
	const navList = [
		{
			link: "home",
			icon: CottageOutlined,
		},
		{
			link: "about",
			icon: InfoOutlined,
		},
		{
			link: "projects",
			icon: BusinessCenterOutlined,
		},
		{
			link: "contact",
			icon: MarkEmailUnreadOutlined,
		},
	];
	return (
		<div
			id="navigation"
			className="z-50 duration-500 -translate-x-full fixed h-screen top-0 left-0 w-[500px] bg-black px-[50px] py-[100px] text-white flex flex-col justify-between">
			<div className="flex flex-col gap-[100px]">
				{/* Navigation Header */}
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-5">
						<p className="text-2xl">menu</p>
						<div className="bg-white w-[50px] h-[2px] rounded-full"></div>
					</div>
					<button onClick={closeMenu}>
						<SvgIcon
							component={ArrowBackOutlined}
							fontSize="small"
						/>
					</button>
				</div>
				{/* Links List */}
				<nav className="flex flex-col gap-5">
					{navList.map(({ link, icon }) => (
						<a
							key={link}
							href={`./${link}`}
							className="flex gap-5 items-center">
							<div className="w-[30px] aspect-square grid place-items-center bg-white text-black">
								<SvgIcon
									component={icon}
									fontSize="small"
								/>
							</div>
							<p>{link}</p>
						</a>
					))}
				</nav>
			</div>
			<div>
				<button className="flex gap-5 items-center">
					<div className="w-[30px] aspect-square grid place-items-center bg-white text-black">
						<SvgIcon
							component={FileDownloadOutlined}
							fontSize="small"
						/>
					</div>
					<p>my resume</p>
				</button>
			</div>
			{/* ec */}
			<div className="absolute -bottom-12 right-10">
				<p className="text-9xl opacity-10 font-montserrat select-none">
					ec
				</p>
			</div>
		</div>
	);
};

export default Menu;
