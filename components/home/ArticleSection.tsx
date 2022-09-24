import React from "react";
import ArticleCard from "../shared/ArticleCard";

const ArticleSection = () => {
	return (
		<section className="flex flex-col px-4 mt-6 mb-96">
			<div className="text-center">
				<h1 className="text-2xl font-semibold text-sky-700">Blog</h1>
				<h2 className="text-3xl font-semibold text-gray-700 my-4">
					Read our last articles
				</h2>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
			</div>
		</section>
	);
};

export default ArticleSection;
