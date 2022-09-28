import React from "react";
import { FiGithub } from "react-icons/fi";

const HeroSection = () => {
	return (
		<div className="absolute flex flex-col space-y-8 top-[300px] lg:top-[350px] left-[60px] lg:left-[130px]">
			<h1 className="font-bold text-gray-700 text-4xl lg:text-7xl tracking-normal">
				Welcome to Nexy
			</h1>
			<div className="flex items-center space-x-4">
				<h2 className="ml-2 font-semibold italic text-xl lg:text-3xl text-gray-800 tracking-wide">
					enjoy the simplicity
				</h2>
				<a
					className="px-3 lg:px-5 py-2 lg:py-3 flex justify-between items-center space-x-4 bg-gradient-to-r from-[#564fd2] to-[#2784a9b5] hover:bg-gradient-to-r hover:from-[#2784a9b5] hover:to-[#564fd2] text-white shadow-lg hover:shadow-xl rounded-3xl"
					href="https://github.com/semet"
					target="_blank"
					rel="noreferrer"
				>
					<span className="text-md lg:text-lg">Fork</span>
					<FiGithub className="text-md lg:text-2xl" />
				</a>
			</div>
		</div>
	);
};

export default HeroSection;
