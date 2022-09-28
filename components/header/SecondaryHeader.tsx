import React from "react";
import MainMenu from "./MainMenu";

interface Props {
	title: string;
	subtitle: string;
}

const SecondaryHeader: React.FC<Props> = ({ title, subtitle }) => {
	return (
		<div className="relative w-full h-[400px] bg-white">
			{/* Menu Section */}
			<MainMenu />
			<div className="absolute grid place-content-center text-center bottom-0 w-full h-[300px] bg-gradient-to-b from-white to-[#49499e]">
				<h1 className="text-6xl font-bold tracking-wider text-stone-800">{title}</h1>
				<h4 className="mt-5 text-lg text-stone-200">{subtitle}</h4>
			</div>
		</div>
	);
};

export default SecondaryHeader;
