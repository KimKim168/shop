import Button from "@/components/Button";
import Card from "@/components/Card";
import Detail from "@/components/Detail";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Image from "next/image";
import { Button as ShadCNButton } from "@/components/ui/button";

import { Fugaz_One } from "next/font/google";
import { Menu, MenuIcon, SlidersHorizontal } from "lucide-react";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  const orderDetails = [
    {
      image: "/images/product2.jpg",
      title: "Fellow Clara French Press",
      increase: "2x",
      price: "$198.00",
    },
    {
      image: "/images/product4.png",
      title:
        "Fellow Ode Brew Grinder Fellow Ode Brew Grinder Fellow Ode Brew Grinder",
      increase: "1x",
      price: "$299.00",
    },
    {
      image: "/images/product5.png",
      title: "Fellow Clara French Press",
      increase: "2x",
      price: "$198.00",
    },

    {
      image: "/images/product3.webp",
      title: "Fellow Ode Brew Grinder",
      increase: "1x",
      price: "$299.00",
    },
    {
      image: "/images/book3.jpg",
      title:
        "Fellow Ode Brew Grinder Fellow Ode Brew Grinder Fellow Ode Brew Grinder",
      increase: "1x",
      price: "$299.00",
    },
    {
      image: "/images/book1.jpg",
      title: "Fellow Clara French Press",
      increase: "2x",
      price: "$198.00",
    },

    {
      image: "/images/book6.jpg",
      title: "Fellow Ode Brew Grinder",
      increase: "1x",
      price: "$299.00",
    },
  ];

  const headers = (
    <header className="mt-3 sm:px-2 sm:pt-8 flex items-center justify-between gap-4  ">
      {/* Logo */}

      <div className="gap-4 flex w-full justify-center items-center">
        {/* Mobile Menu Toggle */}
        <ShadCNButton variant="outline" size="icon" className="shrink-0">
          <MenuIcon />
        </ShadCNButton>
        {/* Search Bar */}
        <div className="flex-1">
          <form className="w-full relative ">
            <label
              for="default-search"
              className=" text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  ariaHidden="true"
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
                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Product..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-1.5 bottom-1.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div
          className="items-center justify-between hidden w-full  md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <ShadCNButton variant="outline" size="icon" className="shrink-0">
        <SlidersHorizontal />
      </ShadCNButton>
    </header>
  );

  return (
    <Main>
      <section className="col-span-12 md:col-span-8 ">
        {headers}
        <>
          <div className="mt-3 sm:mt-0 flex pb-2 overflow-auto scroll-smooth whitespace-nowrap custom-scrollbar gap-x-2">
            <div className="flex-1">
              <Button text="All" dark={true} />
              <Button text="Brew Equipment" />
              <Button text="Coffee" />
              <Button text="Espresso" />
              <Button text=" Instant + RTD" />
              <Button text="Ceramics" />
              <Button text="Brew Equipment" />
              <Button text="Coffee" />
              <Button text="Espresso" />
              <Button text=" Instant + RTD" />
            </div>
          </div>
        </>
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center w-full lg:grid-cols-4 gap-3">
            <Card
              image="/images/product3.webp"
              title="Fellow Clara French Press"
              price="11.00$"
            />
            <Card
              image="/images/product5.png"
              title="Fellow Clara French Press"
              price="12.00$"
            />
            <Card
              image="/images/product4.png"
              title="Fellow Clara French Press"
              price="13.00$"
            />
            <Card
              image="/images/product2.jpg"
              title="Fellow Clara French Press"
              price="14.00$"
            />
            <Card
              image="/images/book1.jpg"
              title="Fellow Clara French Press"
              price="11.00$"
            />
            <Card
              image="/images/book3.jpg"
              title="Fellow Clara French Press"
              price="12.00$"
            />
            <Card
              image="/images/book4.jpg"
              title="Fellow Clara French Press"
              price="13.00$"
            />
            <Card
              image="/images/book5.jpg"
              title="Fellow Clara French Press"
              price="14.00$"
            />
            <Card
              image="/images/book6.jpg"
              title="Fellow Clara French Press"
              price="11.00$"
            />
            <Card
              image="/images/book3.jpg"
              title="Fellow Clara French Press"
              price="12.00$"
            />
            <Card
              image="/images/book1.jpg"
              title="Fellow Clara French Press"
              price="13.00$"
            />
            <Card
              image="/images/book6.jpg"
              title="Fellow Clara French Press"
              price="14.00$"
            />
            <Card
              image="/images/book4.jpg"
              title="Fellow Clara French Press"
              price="11.00$"
            />
            <Card
              image="/images/book5.jpg"
              title="Fellow Clara French Press"
              price="12.00$"
            />
            <Card
              image="/images/book1.jpg"
              title="Fellow Clara French Press"
              price="13.00$"
            />
            <Card
              image="/images/book6.jpg"
              title="Fellow Clara French Press"
              price="14.00$"
            />
          </div>
        </>
        <footer className="p-4 sm:p-10 grid place-items-center ">
          <p className={`text-indigo-600 ${fugaz.className}`}>
            Created with 💛
          </p>
        </footer>
      </section>
      <section className="col-span-12 md:col-span-4 ml-4">
        <>
          <Detail details={orderDetails} />
        </>
      </section>
    </Main>
  );
}
