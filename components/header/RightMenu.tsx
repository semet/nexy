import React from "react";
import LoginButton from "./LoginButton";
import SearchBar from "./SearchBar";
import ToggleMobileMenu from "./ToggleMobileMenu";

const RightMenu = () => {
	return (
		<div className="flex justify-between items-center space-x-4">
			{/* Search Bar */}
			<SearchBar />
			{/* Login Button */}
			<LoginButton />
			{/* Toggle Mobile Menu */}
			<ToggleMobileMenu />
		</div>
	);
};

export default RightMenu;
