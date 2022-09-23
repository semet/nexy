import React from "react";
import TeamCard from "../shared/TeamCard";

const teamMembers = [
	{
		name: "Hamdani Ash-Sidiq",
		position: "Fullstack Web Developer",
		image: "/images/team/02.jpg",
	},
	{
		name: "Zul Fahmi",
		position: "UI/UX Designer",
		image: "/images/team/01.jpg",
	},
	{
		name: "Irhas Al-Ansory",
		position: "Marketing Professional",
		image: "/images/team/03.jpg",
	},
	{
		name: "Nita Yulliana",
		position: "Marketing",
		image: "/images/team/04.jpg",
	},
];
const TeamSection = () => {
	return (
		<section
			className="flex flex-col pt-4 bg-cover"
			style={{ backgroundImage: "url('/images/bg/shape.png')" }}
		>
			<div className="text-center">
				<h1 className="text-2xl font-semibold text-blue-700">Team</h1>
				<h2 className="text-3xl font-semibold text-gray-700 my-4">
					Meet our professional team members
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 content-center p-4 mb-4">
				{teamMembers.map((team, index) => (
					<TeamCard team={team} key={index} />
				))}
			</div>
		</section>
	);
};

export default TeamSection;
