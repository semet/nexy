import React from "react";
import {
	MdCalendarViewMonth,
	MdOutlineComment,
	MdOutlineSupervisedUserCircle,
} from "react-icons/md";

interface Props {
	commentsCount: number;
	createdAt: string | Date;
	author: string;
}

const PostDetails: React.FC<Props> = ({ author, commentsCount, createdAt }) => {
	return (
		<div className="flex items-center justify-start  space-x-3 md:space-x-6 text-gray-800 text-md md:text-sm lg:text-xs xl:text-base">
			<div className="flex items-center space-x-2">
				<MdOutlineComment />
				<p>
					{commentsCount} <span>Comments</span>
				</p>
			</div>
			<div className="flex items-center space-x-2">
				<MdCalendarViewMonth />
				<span>{new Date(createdAt).toDateString()}</span>
			</div>
			<div className="flex items-center space-x-2">
				<MdOutlineSupervisedUserCircle />
				<span>{author}</span>
			</div>
		</div>
	);
};

export default PostDetails;
