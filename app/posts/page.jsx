import Image from "next/image";
import React from "react";

const Page = async () => {
  const url = await fetch("https://bunjun.brolong.pro/api/products");
  const result = await url.json();
  const posts = result.data;

  return (
    <div>
      <main className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="px-2 grid grid-cols-1 mb-10 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 items-center justify-center w-full lg:grid-cols-4 gap-3">
          {posts.map((post) => (
            <div className=" md:max-w-xs p-1 mt-5 bg-white border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-lg bg-gray-200 aspect-[1/1] object-cover p-0.5"
                  src={`https://bunjun.brolong.pro/assets/images/products/${post.image}`}
                  alt={post.image}
                  width={500} // Adjust width according to your needs
                  height={500}
                  objectFit="center" // Adjust height according to your needs
                />
              </a>
              <div className="px-1 py-3  text-sm grid grid-cols-5 ">
                <a href="#" className="col-span-3">
                  <h5 className=" line-clamp-2  text-gray-900 dark:text-white">
                    {post.name}
                  </h5>
                  <p>ID: {post.id}</p>
                </a>

                <div className="col-span-2 text-right text-primary dark:text-gray-400">
                  <p className="flex flex-col">
                    <p>{post.price}</p>

                    <p className="line-through decoration-red-600 text-red-600">
                      {post.discount_percent}
                    </p>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
