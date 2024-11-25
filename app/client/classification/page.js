import { Link } from "lucide-react";
import React from "react";
import { Button as ShadCNButton } from "@/components/ui/button";
import Image from "next/image";

export default function page() {
  return (
    <>
      <section className="w-full mt-5 mb-7 px-10">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="text-sm sm:text-xl md:text-2xl">
            Thnal Classification
          </h1>
          {/* <Image src="/images/direction.png" width={30} height={30}></Image> */}
          <h1 className="text-sm sm:text-xl md:text-2xl">
            DDC | LC (AL Power)
          </h1>
        </div>

        <hr className="border-[#4d489d] my-7"></hr>

        {/* Start */}
        <div className="grid  grid-cols-12 max-w-screen-2xl  gap-4 mx-auto  mt-5">
          <div className="col-span-12 sm:col-span-8 border borderColor  rounded-lg bg-white p-6  w-full">
            <h1 className="text-[16px] sm:text-xl md:text-xl font-normal text-black mb-2">
              Standard Number Khmer Book
            </h1>
            <p className="text-sm text-black mb-4">
              Enter an ISBN, ISSN or TSIN (Thnal Standard Identification Number)
            </p>
            {/* <input
              type="text"
              placeholder="Enter number here"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-0.5 focus:ring-black focus:border-black"
            /> */}
            {/* Search */}
            <div>
              <form>
                <label
                  htmlFor="default-search"
                  className="text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div
                    className="absolute inset-y-0 start-0 flex items-center ps-3"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="Search ...."
                    required
                    aria-label="Search"
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-1.5 bottom-1.5 bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            {/* End Search */}
          </div>
          <div className="col-span-12 sm:col-span-4 bg-payMent rounded-lg text-white text-center p-6">
            <h1 className="text-sm sm:text-xl md:text-xl">
              Access Classification
            </h1>
            <h1 className="text-sm sm:text-xl md:text-xl">
              Power BY: <span className="text-orange-200">Alpha AI</span>
            </h1>
            <h1 className="text-sm sm:text-xl md:text-xl pt-6">
              Paid Services
            </h1>
          </div>
        </div>

        {/* End */}
        {/* Start */}
        <div className="max-w-screen-2xl mx-auto  mt-6 text-[16px] sm:text-[18px] md:text-[18px] space-y-3">
          <h1 className="font-bold text-[16px] sm:text-xl md:text-2xl">
            Summary:
          </h1>
          <p>Title: Business</p>
          <p>Author: Thnal</p>
          <p>
            Formats: Book <span>Edition: 3 </span>
          </p>
          <div className="flex space-x-5 font-bold">
            <p>DDC: 12.3</p>
            <p>LC: A12st</p>
          </div>
          <div>
            <p>
              Record Link:{" "}
              <span>
                <a className="text-blue-500 hover:cursor-pointer underline">
                  https://www.thnal.com/business
                </a>
              </span>
            </p>
          </div>
        </div>
        {/* End */}

        {/* Start */}
        <div class="bg-gray-100  mt-10">
          <p className="text-[16px] sm:text-[18px] md:text-[18px]">
            Search Result
          </p>
          <div class="overflow-x-auto mt-2">
            <table class="min-w-full bg-white border border-black">
              <thead>
                <tr>
                  <th class="px-32 py-2 border border-black bg-gray-200 text-left text-sm font-semibold text-black">
                    Title & Author
                  </th>
                  <th class="px-4 py-2 border border-black bg-gray-200 text-left text-sm font-semibold text-black">
                    Format
                  </th>
                  <th class="px-4 py-2 border border-black bg-gray-200 text-left text-sm font-semibold text-black">
                    Edition
                  </th>
                  <th class="px-4 py-2 border border-black bg-gray-200 text-left text-sm font-semibold text-black">
                    Resource Link
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-gray-100">
                  <td class="px-4 py-2 border border-black text-black">
                    John Doe
                  </td>
                  <td class="px-4 py-2 border border-black text-black">30</td>
                  <td class="px-4 py-2 border border-black text-black">Book</td>
                  <td class="px-4 py-2 border border-black text-black">
                    https://www.thnal.com/business
                  </td>
                </tr>
                <tr class="hover:bg-gray-100">
                  <td class="px-4 py-2 border border-black text-black">
                    John Doe
                  </td>
                  <td class="px-4 py-2 border border-black text-black">30</td>
                  <td class="px-4 py-2 border border-black text-black">Book</td>
                  <td class="px-4 py-2 border border-black text-black">
                    https://www.thnal.com/business
                  </td>
                </tr>
                <tr class="hover:bg-gray-100">
                  <td class="px-4 py-2 border border-black text-black">
                    John Doe
                  </td>
                  <td class="px-4 py-2 border border-black text-black">30</td>
                  <td class="px-4 py-2 border border-black text-black">Book</td>
                  <td class="px-4 py-2 border border-black text-black">
                    https://www.thnal.com/business
                  </td>
                </tr>
                <tr class="hover:bg-gray-100">
                  <td class="px-4 py-2 border border-black text-black">
                    John Doe
                  </td>
                  <td class="px-4 py-2 border border-black text-black">30</td>
                  <td class="px-4 py-2 border border-black text-black">Book</td>
                  <td class="px-4 py-2 border border-black text-black">
                    https://www.thnal.com/business
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* End */}
      </section>
    </>
  );
}
