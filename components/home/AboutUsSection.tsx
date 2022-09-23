/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiCheck, FiPhone } from "react-icons/fi";

const AboutUsSection = () => {
	return (
		<section
			className="flex flex-col-reverse lg:flex-row justify-between px-4 bg-cover"
			style={{
				backgroundImage: "url('/images/bg/shape.png')",
			}}
		>
			<div className="w-full lg:w-[60%] flex flex-col space-y-6 xl:space-y-4 pl-16 pr-4 py-4 text-center lg:text-left">
				<h1 className="text-2xl font-semibold text-blue-700">About Nexy</h1>
				<h2 className="text-3xl font-semibold">
					Manages IT Service Across Various Business
				</h2>
				<p className="text-xl lg:text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis
					vel molestiae in fugiat nemo atque maxime rem accusamus magni corrupti
					reiciendis libero ducimus, sequi deleniti autem aperiam consequuntur
					exercitationem?
				</p>
				<div className="mx-auto lg:mx-0">
					<div className="flex items-center space-x-2 my-4">
						<div className="bg-blue-600 inline-block p-1 rounded-full">
							<FiCheck className="text-xl lg:text-2xl text-gray-100" />
						</div>
						<span className="text-xl lg:text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</span>
					</div>
					<div className="flex items-center space-x-2 my-4">
						<div className="bg-blue-600 inline-block p-1 rounded-full">
							<FiCheck className="text-xl lg:text-2xl text-gray-100" />
						</div>
						<span className="text-xl lg:text-lg">
							Incidunt facilis vel molestiae in.
						</span>
					</div>
					<div className="flex items-center space-x-2 my-4">
						<div className="bg-blue-600 inline-block p-1 rounded-full">
							<FiCheck className="text-xl lg:text-2xl text-gray-100" />
						</div>
						<span className="text-xl lg:text-lg">
							Atque maxime rem accusamus magni.
						</span>
					</div>
				</div>
				<div className="flex justify-between items-center bg-blue-200 p-4 text-xl shadow-lg rounded-xl italic">
					<span className="font-semibold">Contact us on :</span>
					<div className="flex items-center space-x-4">
						<FiPhone />
						<span className="font-semibold">+628767899888</span>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-[40%] p-4">
				<img
					src="/images/bg/2717001.png"
					alt="Nexy About"
					className="w-[500px] lg:min-w-[420px] mx-auto object-cover"
				/>
			</div>
		</section>
	);
};

export default AboutUsSection;
