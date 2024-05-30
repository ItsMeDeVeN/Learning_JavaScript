import React from "react";
// import Blog1 from "../images/blog1.jpg";
// import Blog2 from "../images/blog2.jpg";
// import Blog3 from "../images/blog3.jpg";

const Dashboard = () => {
  return (
    <>
      <div className="bg-pink-100 py-8 min-h-full">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">MY BLOG</h1>
          <p className="text-center mb-8">
            Lorem ipsum dolor sit amet, consect adipisc elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua enim sed do eit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 ">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img alt="Blog Post" className="w-full" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Latest News Post</h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eveniet incidunt quidem illum repellat.
                </p>
                <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                  Read More
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img  alt="Blog Post" className="w-full" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Latest News Post</h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eveniet incidunt quidem illum repellat.
                </p>
                <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                  Read More
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img alt="Blog Post" className="w-full" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Latest News Post</h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eveniet incidunt quidem illum repellat.
                </p>
                <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;