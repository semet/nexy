/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiShield, FiPower, FiGlobe, FiDatabase } from "react-icons/fi";

const services = [
	{
		icon: FiShield,
		heading: "Cyber Security",
		text: "There are many variations of passages of Lorem Ipsum available",
		color: "text-blue-800",
	},
	{
		icon: FiPower,
		heading: "Data Analytics",
		text: "There are many variations of passages of Lorem Ipsum available",
		color: "text-indigo-800",
	},
	{
		icon: FiGlobe,
		heading: "Web Development",
		text: "There are many variations of passages of Lorem Ipsum available",
		color: "text-green-800",
	},
	{
		icon: FiDatabase,
		heading: "SEO Optimization",
		text: "There are many variations of passages of Lorem Ipsum available",
		color: "text-cyan-800",
	},
];

const ServiceSection = () => {
	return (
		<section
			className="flex flex-col lg:flex-row justify-between px-4 py-6 bg-no-repeat"
			style={{
				backgroundImage: "url('/images/shape/banner_2_bg.png')",
			}}
		>
			<div className="w-full lg:w-[40%] mx-auto">
				<img
					src="/images/bg/2.png"
					alt="Service"
					className="w-[400px] lg:w-[500px] lg:min-w-[400px] mx-auto object-cover"
				/>
			</div>
			<div className="w-full lg:w-[60%] flex flex-col space-y-6 xl:space-y-4 md:px-16 lg:pl-16 lg:pr-4 py-4 text-center lg:text-left text-gray-800">
				<h1 className="text-2xl font-semibold text-blue-700">Our Service</h1>
				<h2 className="text-3xl font-semibold">
					Custom IT Solutions For Your Successful Business
				</h2>
				<p className="text-base lg:text-lg">
					Solit is innovative and dynamic software development, outsourcing and
					consulting company. We have proven success and experience in building Dedi
					cated Development Teams of different sizes for us.
				</p>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					{services.map((service, index) => (
						<div
							className="flex flex-col items-center lg:items-start space-y-4 p-4 hover:shadow-xl hover:rounded-xl hover:bg-gray-50 hover:scale-[1.01] transition-all ease-in-out"
							key={index}
						>
							<service.icon className={`text-4xl ${service.color}`} />
							<h3 className="text-2xl lg:text-xl font-semibold text-sky-700">
								{service.heading}
							</h3>
							<p className="text-base lg:text-lg">{service.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
