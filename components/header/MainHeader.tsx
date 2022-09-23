import React, { ReactNode } from "react";
import HeroSection from "../home/HeroSection";
import MainMenu from "./MainMenu";

interface Props {
	children?: ReactNode;
}

const MainHeader: React.FC<Props> = ({ children }) => {
	return (
		<div
			className="relative w-full h-[720px] bg-cover bg-no-repeat bg-opacity-50 bg-center"
			style={{ backgroundImage: "url('/images/bg/3.png')" }}
		>
			{/* Menu Section */}
			<MainMenu />
			{/* Hero Section */}
			<HeroSection />
		</div>
	);
};

export default MainHeader;
