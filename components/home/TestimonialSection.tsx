import React from "react";
import TestimonialCard from "../shared/TestimonialCard";

const persons = [
	{
		name: "Hamdani Ash-Sidiq",
		position: "Fullstack Web Developer",
		image: "/images/team/02.jpg",
		comment: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, voluptatum,
      aliquid eos nesciunt quos ipsa hic eaque accusamus, molestias iste placeat
      blanditiis? Expedita, corrupti porro aut distinctio saepe voluptatibus
      adipisci!`,
		rotate: "rotate-0 lg:rotate-2",
	},
	{
		name: "Zul Fahmi",
		position: "UI/UX Designer",
		image: "/images/team/01.jpg",
		comment: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, voluptatum,
      aliquid eos nesciunt quos ipsa hic eaque accusamus, molestias iste placeat
      blanditiis? Expedita, corrupti porro aut distinctio saepe voluptatibus
      adipisci!`,
		rotate: "rotate-0 lg:-rotate-6",
	},
	{
		name: "Irhas Al-Ansory",
		position: "Marketing Professional",
		image: "/images/team/03.jpg",
		comment: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, voluptatum,
      aliquid eos nesciunt quos ipsa hic eaque accusamus, molestias iste placeat
      blanditiis? Expedita, corrupti porro aut distinctio saepe voluptatibus
      adipisci!`,
		rotate: "rotate-0 lg:rotate-3",
	},
	{
		name: "Nita Yulliana",
		position: "Marketing",
		image: "/images/team/04.jpg",
		comment: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, voluptatum,
      aliquid eos nesciunt quos ipsa hic eaque accusamus, molestias iste placeat
      blanditiis? Expedita, corrupti porro aut distinctio saepe voluptatibus
      adipisci!`,
		rotate: "rotate-0 lg:rotate-1 -mt-6",
	},
];

const TestimonialSection = () => {
	return (
		<section
			className="flex flex-col pt-4 bg-cover bg-center bg-gray-600/[.5]"
			style={{ backgroundImage: "url('/images/shape/bg3.png')" }}
		>
			<div className="text-center">
				<h1 className="text-2xl font-semibold text-indigo-700">Testimonial</h1>
				<h2 className="text-3xl font-semibold text-gray-50 my-4">
					What people say about us
				</h2>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 content-center gap-4 p-4 h-auto">
				{persons.map((person, index) => (
					<TestimonialCard person={person} key={index} />
				))}
			</div>
		</section>
	);
};

export default TestimonialSection;
