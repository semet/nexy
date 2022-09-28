/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiTwitter, FiFacebook, FiPhone } from "react-icons/fi";
import {
	MdOutlineComment,
	MdCalendarViewMonth,
	MdOutlineSupervisedUserCircle,
} from "react-icons/md";
import type { Post } from "common";

const ArticleCard: React.FC<{ post: Post }> = ({ post }) => {
	return (
		<article className="flex flex-row lg:flex-col w-full bg-gray-300/10 shadow-lg rounded-xl [&>div:nth-child(1)>img]:hover:scale-105  [&>div:nth-child(1)>img]:hover:-skew-x-2 overflow-hidden">
			<div className="min-w-[50%] lg:w-full overflow-hidden">
				<img
					src="/images/blog/bg1.jpg"
					alt="Article"
					className="object-cover w-full h-full rounded-l-lg lg:rounded-bl-none lg:rounded-t-lg shadow-lg transition-all ease-in-out duration-300"
				/>
			</div>
			<div className="py-2 px-4 mt-4 flex flex-col space-y-4">
				<h1 className="text-lg md:text-2xl lg:text-2xl font-semibold ">
					{post.title}
				</h1>
				<div className="flex items-center justify-start lg:justify-between space-x-3 md:space-x-6 text-gray-800  text-xs md:text-sm lg:text-xs xl:text-base">
					<div className="flex items-center space-x-2">
						<MdOutlineComment />
						<p>
							5 <span className="hidden xl:inline">Comments</span>
						</p>
					</div>
					<div className="flex items-center space-x-2">
						<MdCalendarViewMonth />
						<span>{new Date(post.createdAt).toDateString()}</span>
					</div>
					<div className="flex items-center space-x-2">
						<MdOutlineSupervisedUserCircle />
						<span>{post.author}</span>
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
