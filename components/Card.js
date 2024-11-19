import React from "react";
import Image from "next/image";

export default function Card({ image, title, shortDescription, price }) {
  return (
    <div className=" md:max-w-xs p-1 mt-5 bg-white border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          className="rounded-lg bg-gray-200 aspect-square object-cover p-1"
          src={image}
          alt="Noteworthy technology acquisitions 2021"
          width={500} // Adjust width according to your needs
          height={500}
          objectFit="center" // Adjust height according to your needs
        />
      </a>
      <div className="px-1 py-3  text-sm grid grid-cols-5 ">
        <a href="#" className="col-span-3">
          <h5 className=" line-clamp-2  text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>

        <p className="col-span-2 text-right text-primary dark:text-gray-400">{price}</p>
      </div>
    </div>
  );
}
