import React from 'react'
import Image from 'next/image'

export default function Card({image, title, shortDescription, price}) {
  return (

    <div className=" md:max-w-xs mt-5 bg-white border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <Image
        className="rounded-2xl aspect-[1/1] object-contain p-2"
        src={image}
        alt="Noteworthy technology acquisitions 2021"
        width={500} // Adjust width according to your needs
        height={500}
        objectFit="center"  // Adjust height according to your needs
      />
    </a>
    <div className="px-3 py-3">
      <a href="#">
        <h5 className=" text-base line-clamp-2 font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
     
      <p className=" font-bold text-primary dark:text-gray-400">
        {price}
      </p>
     
    </div>
    </div>
  )
}
