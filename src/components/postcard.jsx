import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ profileImage, username, content, isLiked }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white w-96">
      <div className="flex items-center gap-3">
        <img
          src={profileImage}
          alt={`${username}'s profile`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <h2 className="text-lg font-semibold">{username}</h2>
      </div>
      <p className="mt-2 text-gray-700">{content}</p>
      <div className="mt-4">
        <LikeButton initialLiked={isLiked} />
      </div>
    </div>
  );
};

export default PostCard;