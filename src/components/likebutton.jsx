import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`px-3 py-1 rounded-lg transition-colors ${
        liked ? "bg-red-500 text-white" : "bg-gray-200 text-black"
      }`}
      onClick={() => setLiked(!liked)}
    >
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;