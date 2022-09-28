import { Post } from "common";
import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import PostCard from "../components/blog/PostCard";
import Sidebar from "../components/blog/Sidebar";
import SecondaryHeader from "../components/header/SecondaryHeader";
import Layout from "../components/Layout";
import Pagination from "../components/shared/Pagination";
import { posts } from "./api/posts";

const blog: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Nexy Blog</title>
			</Head>
			<Layout>
				{/* Header */}
				<SecondaryHeader title="Blog Lists" subtitle="read our latest blog" />
				{/* Content */}
				<section className="grid grid-cols-4 gap-6 px-4 pt-10">
					<div className="bg-white col-span-4 lg:col-span-3 space-y-4">
						{posts.map((post, index) => (
							<PostCard post={post} key={index} />
						))}
						{/* Pagination */}
						<Pagination />
					</div>
					{/* Blog Sidebar */}
					<Sidebar />
				</section>
			</Layout>
		</Fragment>
	);
};

export default blog;
