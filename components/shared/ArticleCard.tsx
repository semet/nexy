/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiTwitter, FiFacebook, FiPhone } from "react-icons/fi";
import {
	MdOutlineComment,
	MdCalendarViewMonth,
	MdOutlineSupervisedUserCircle,
} from "react-icons/md";

const ArticleCard = () => {
	return (
		<article className="flex flex-row lg:flex-col w-full bg-white shadow-lg rounded-xl [&>div:nth-child(1)>img]:hover:scale-105 overflow-hidden">
			<div className="min-w-[50%] lg:w-full">
				<img
					src="/images/blog/bg1.jpg"
					alt="Article"
					className="object-cover w-full h-full rounded-l-lg lg:rounded-bl-none lg:rounded-t-lg shadow-lg transition-all ease-in-out duration-300"
				/>
			</div>
			<div className="py-2 px-4 mt-4 flex flex-col space-y-4">
				<h1 className="text-lg md:text-3xl lg:text-2xl font-semibold ">
					Article Title Goes Here On The Top
				</h1>
				<div className="flex items-center justify-start lg:justify-between space-x-3 md:space-x-6 text-gray-800">
					<div className="flex items-center space-x-2 text-xs md:text-sm lg:text-xs">
						<MdOutlineComment />
						<span>5</span>
					</div>
					<div className="flex items-center space-x-2 text-xs md:text-sm lg:text-xs">
						<MdCalendarViewMonth />
						<span>{new Date().toDateString()}</span>
					</div>
					<div className="flex items-center space-x-2 text-xs md:text-sm lg:text-xs">
						<MdOutlineSupervisedUserCircle />
						<span>Admin</span>
					</div>
				</div>
				<p className="text-lg md:text-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi
					accusamus aliquam illum qui! Eius quasi ducimus quae corporis ...{" "}
					<a href="#" className="text-indigo-500">
						read more
					</a>
				</p>
				<div className="flex -space-x-2 hover:space-x-2 transition-all py-2 w-min">
					<a
						href="#"
						className="p-2 bg-blue-400 text-white rounded-full shadow-lg shadow-blue-500"
					>
						<FiTwitter />
					</a>
					<a
						href="#"
						className="p-2 bg-blue-700 text-white rounded-full shadow-lg shadow-blue-800"
					>
						<FiFacebook />
					</a>
					<a
						href="#"
						className="p-2 bg-green-500 text-white rounded-full shadow-lg shadow-green-600"
					>
						<FiPhone />
					</a>
				</div>
			</div>
		</article>
	);
};

export default ArticleCard;
