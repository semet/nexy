import React from "react";
import { FiAirplay, FiAnchor, FiGithub, FiShield } from "react-icons/fi";

const features = [
	{
		icon: FiGithub,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	},
	{
		icon: FiShield,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	},
	{
		icon: FiAirplay,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	},
	{
		icon: FiAnchor,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	},
];

const FeatureSection = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center -mt-14 px-4 py-6 lg:px-20 bg-gray-100">
			{features.map((feature, index) => (
				<div className="relative" key={index}>
					<div className="absolute -inset-1 bg-blue-700 blur-md"></div>
					<div className="relative flex flex-col justify-center space-y-6 text-lg w-full items-center p-4 bg-gray-50 hover:bg-gradient-to-br hover:from-[#6059e7] hover:to-emerald-200 text-gray-700 hover:text-white shadow-lg rounded-xl hover:shadow-xl hover:-mt-2 z-10 cursor-pointer transition-all ease-in-out duration-300">
						<feature.icon className="text-4xl " />
						<p className="text-center">{feature.text}</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default FeatureSection;
