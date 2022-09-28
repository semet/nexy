/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiCalendar } from "react-icons/fi";

const WidgetRecentPosts = () => {
	return (
		<div className="border-t-[1px]">
			<h3 className="text-2xl font-bold text-gray-700 my-4">Recent Posts</h3>
			<div className="flex flex-col space-y-6">
				{Array(5)
					.fill(0)
					.map((_, index) => (
						<div className="flex rounded-md bg-white shadow-md" key={index}>
							<div className="w-1/2">
								<img
									src="/images/blog/bg1.jpg"
									alt="Posts"
									className="w-full h-full rounded-l-md object-cover"
								/>
							</div>
							<div className="w-full px-2 pt-1 pb-2 space-y-4">
								<h4 className="font-medium text-lg">
									Some related posts title from the post
								</h4>
								<div className="flex items-center space-x-2 text-xs">
									<FiCalendar />
									<span>{new Date().toDateString()}</span>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default WidgetRecentPosts;
