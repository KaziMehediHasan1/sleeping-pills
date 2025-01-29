import React from "react";
import Review from "./Review";
const LatestBlog = () => {
  return (
    <div>
      <div className="pt-5 px-3 sm:px-0 md:px-4 lg:px-0">
        <h1 className="font-semibold text-xl">Latest Blog Post</h1>
        <div className="  border-b-1 border-gray-300 pt-3 w-full"></div>
        {/* Review Sections */}
        <Review />
      </div>
    </div>
  );
};

export default LatestBlog;
