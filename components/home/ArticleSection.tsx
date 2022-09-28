import React from "react";
import ArticleCard from "../shared/ArticleCard";
import type { Post } from "common";

const posts: Post[] = [
	{
		title: "Lorem ipsum dolor sit amet consectetur",
		image: "/images/blog/bg1.jpg",
		author: "Admin",
		createdAt: "01-01-2021",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aut possimus praesentium alias tempora ducimus voluptates doloribus iure, repudiandae nisi doloremque inventore. Libero dolor ipsam molestias officiis, a dolore. Iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea veritatis sint quae, a porro ratione vero alias, aliquid ut earum tempore labore repellendus, molestias accusamus aspernatur ab cum non nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt odit quia expedita asperiores illo, ducimus incidunt autem praesentium labore cumque voluptatem at quibusdam laborum tempore. Pariatur in nisi numquam temporibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus autem earum qui ratione eveniet dignissimos exercitationem ipsam temporibus ea, aspernatur mollitia. Est beatae accusamus voluptate totam earum quae quo nulla!",
	},
	{
		title: "Ea veritatis sint quae.",
		image: "/images/blog/bg3.jpg",
		author: "Admin",
		createdAt: "01-05-2021",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aut possimus praesentium alias tempora ducimus voluptates doloribus iure, repudiandae nisi doloremque inventore. Libero dolor ipsam molestias officiis, a dolore. Iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea veritatis sint quae, a porro ratione vero alias, aliquid ut earum tempore labore repellendus, molestias accusamus aspernatur ab cum non nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt odit quia expedita asperiores illo, ducimus incidunt autem praesentium labore cumque voluptatem at quibusdam laborum tempore. Pariatur in nisi numquam temporibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus autem earum qui ratione eveniet dignissimos exercitationem ipsam temporibus ea, aspernatur mollitia. Est beatae accusamus voluptate totam earum quae quo nulla!",
	},
	{
		title: " Accusamus autem earum qui ratione.",
		image: "/images/blog/bg3.jpg",
		author: "Admin",
		createdAt: "01-06-2021",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aut possimus praesentium alias tempora ducimus voluptates doloribus iure, repudiandae nisi doloremque inventore. Libero dolor ipsam molestias officiis, a dolore. Iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea veritatis sint quae, a porro ratione vero alias, aliquid ut earum tempore labore repellendus, molestias accusamus aspernatur ab cum non nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt odit quia expedita asperiores illo, ducimus incidunt autem praesentium labore cumque voluptatem at quibusdam laborum tempore. Pariatur in nisi numquam temporibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus autem earum qui ratione eveniet dignissimos exercitationem ipsam temporibus ea, aspernatur mollitia. Est beatae accusamus voluptate totam earum quae quo nulla!",
	},
];

const ArticleSection = () => {
	return (
		<section className="flex flex-col px-4 mt-6">
			<div className="text-center">
				<h1 className="text-2xl font-semibold text-sky-700">Blog</h1>
				<h2 className="text-3xl font-semibold text-gray-700 my-4">
					Read our last articles
				</h2>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
				{posts.map((post, index) => (
					<ArticleCard post={post} key={index} />
				))}
			</div>
		</section>
	);
};

export default ArticleSection;
