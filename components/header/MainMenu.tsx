import React, { useState, useEffect } from "react";
import AppLogo from "./AppLogo";
import MenuItems from "./MenuItems";
import RightMenu from "./RightMenu";
import { useScroll } from "../../hooks/scrollHook";

const MainMenu = () => {
	const scrollPosition = useScroll();

	return (
		<div
			className={`flex justify-between items-center lg:items-end px-4 md:px-16 lg:px-32 py-4 fixed w-full z-50 transition-all ease-in-out duration-500 ${
				scrollPosition >= 95 ? "bg-white shadow-md h-24" : "bg-gray-50/[.2] h-32"
			}`}
		>
			{/* Logo */}
			<AppLogo />
			{/* menu items */}
			<MenuItems />
			{/* Right menu */}
			<RightMenu />
		</div>
	);
};

export default MainMenu;
