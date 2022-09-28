/* eslint-disable @next/next/no-img-element */
import { Post } from "common";
import Link from "next/link";
import React from "react";
import PostDetails from "../shared/PostDetails";
import PostShareButtons from "../shared/PostShareButtons";

interface Props {
	post: Post;
}
const PostCard: React.FC<Props> = ({ post }) => {
	const { author, content, createdAt, image, title } = post;
	return (
		<article className="flex flex-col lg:flex-row justify-start rounded-lg shadow-md">
			<div className="w-full lg:w-1/2">
				<img
					src={image}
					alt="Post Image"
					className="h-full w-full object-cover rounded-t-lg lg:rounded-t-none lg:rounded-l-lg"
				/>
			</div>
			<div className="w-full lg:w-1/2 flex flex-col justify-between space-y-4 px-4 py-2">
				<h1 className="text-2xl font-semibold text-gray-700">{title}</h1>
				{/* Post comment, Date and Author */}
				<PostDetails author={author} commentsCount={5} createdAt={createdAt} />
				{/* Post Content */}
				<p className="text-lg text-gray-700">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quo
					accusantium totam provident dolor minima, laboriosam pariatur
					exercitationem eos nulla vero esse possimus modi sed quia molestias
					similique sunt! Ipsam...{" "}
					<Link href="#">
						<a className="text-blue-800 font-semibold">read more</a>
					</Link>
				</p>
				{/* Share Button */}
				<PostShareButtons />
			</div>
		</article>
	);
};

export default PostCard;
