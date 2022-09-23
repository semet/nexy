/* eslint-disable @next/next/no-img-element */
import React from "react";

const TestimonialCard: React.FC<{
	person: {
		name: string;
		position: string;
		comment: string;
		image: string;
		rotate: string;
	};
}> = ({ person }) => {
	return (
		<div
			className={`p-4 flex flex-col space-y-4 w-auto bg-white text-gray-700 rounded-lg shadow-lg ${person.rotate} hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer`}
		>
			<div className="flex items-center space-x-4">
				<img src={person.image} alt="Avatar" className="w-16 rounded-full" />
				<div className="">
					<h3 className="text-lg font-semibold">{person.name}</h3>
					<h5 className="text-sm">{person.position}</h5>
				</div>
			</div>
			<div>{person.comment}</div>
		</div>
	);
};

export default TestimonialCard;
