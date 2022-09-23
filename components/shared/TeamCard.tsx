/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

interface Props {
	team: {
		name: string;
		position: string;
		image: string;
	};
}

const socialLinks = [
	{
		icon: FiTwitter,
		background: "bg-blue-400 ",
		url: "#",
	},
	{
		icon: FiFacebook,
		background: "bg-blue-700",
		url: "#",
	},
	{
		icon: FiLinkedin,
		background: "bg-blue-900",
		url: "#",
	},
];
const TeamCard: React.FC<Props> = ({ team }) => {
	return (
		<div className="flex flex-col bg-white shadow-md hover:shadow-lg hover:scale-[1.02] hover:bg-violet-700/[.25] transition-all duration-300 rounded-lg">
			<div>
				<img src={team.image} alt="" className="object-cover rounded-t-lg" />
			</div>
			<div className="flex flex-col items-center py-4 space-y-4 -mt-9">
				<div className="flex justify-between space-x-6">
					{socialLinks.map((link, index) => (
						<div
							className={`p-2 rounded-full shadow-lg hover:scale-110 transition-all ease-in-out duration-300 ${link.background}`}
							key={index}
						>
							<Link href={link.url}>
								<a>
									<link.icon className="text-white text-xl" />
								</a>
							</Link>
						</div>
					))}
				</div>
				<h1 className="text-2xl font-bold tracking-wide">{team.name}</h1>
				<h2 className="text-lg font-semibold">{team.position}</h2>
			</div>
		</div>
	);
};

export default TeamCard;
