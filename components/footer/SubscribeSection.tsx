/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaPaperPlane, FaEnvelope } from "react-icons/fa";

const SubscribeSection = () => {
	return (
		<section className="w-[80%] mt-10 mb-16 mx-auto bg-gradient-to-r from-indigo-300 to-white rounded-tl-[100px] rounded-br-[100px] shadow-lg">
			<div className="py-20 px-6 w-full relative overflow-hidden">
				<div className="flex items-center bg-white w-[66%] md:w-[70%] lg:w-[80%] py-1 pl-4 pr-1 rounded-3xl shadow-md hover:shadow-lg">
					<input
						type="text"
						placeholder="example@email.com"
						className="w-full italic font-mono text-gray-700 bg-transparent border-none focus:border-none focus:outline-none focus:ring-0 text-xl"
					/>
					<button className="px-4 py-4 bg-gradient-to-r from-[#6059e7] to-emerald-300 rounded-3xl w-24 mr-2 shadow-lg">
						<FaEnvelope className="text-white text-2xl mx-auto" />
					</button>
				</div>
				<div className="absolute -right-10 -top-10" aria-hidden={true}>
					<div className="w-[200px] h-[200px] bg-blue-400/10  rounded-full" />
					<FaPaperPlane className="absolute text-indigo-200 text-9xl mx-auto right-20 top-10" />
				</div>
				<div className="mt-6 ml-2">
					<h1 className="text-2xl lg:text-4xl font-semibold text-gray-700 font-mono">
						Don't miss anything from us !
					</h1>
				</div>
			</div>
		</section>
	);
};

export default SubscribeSection;
