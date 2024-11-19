import Button from "@/components/Button";
import Card from "@/components/Card";
import Detail from "@/components/Detail";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Image from "next/image";
import { Button as ShadCNButton } from "@/components/ui/button";
// import { Sheet } from "@/components/ui/sheet";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Fugaz_One } from "next/font/google";
import {
  CoffeeIcon,
  Menu,
  MenuIcon,
  ShoppingCart,
  SlidersHorizontal,
} from "lucide-react";

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

  const categories = [
    {
      id: 1,
      text: "Brew Equipment",
      icon: "/images/product2.jpg",
    },
    {
      id: 2,
      text: "Coffee",
      icon: "/images/coffee.png",
    },
    {
      id: 3,
      text: "Espresso",
      icon: "/images/drink.png",
    },
    {
      id: 4,
      text: "Instant + RTD",
      icon: "/images/product2.jpg",
    },
    {
      id: 5,
      text: "Ceramics",
      icon: "/images/coffee.png",
    },
    {
      id: 6,
      text: "Brew Equipment",
      icon: "/images/drink.png",
    },
    {
      id: 7,
      text: "Coffee",
      icon: "/images/product2.jpg",
    },
    {
      id: 8,
      text: "Espresso",
      icon: "/images/product2.jpg",
    },
    {
      id: 9,
      text: "Instant + RTD",
      icon: "/images/product2.jpg",
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
              htmlFor="default-search"
              className=" text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  // ariaHidden="true"
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
                className="block w-full p-3 ps-10 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 focus:ring-focus:ring-primary/100 focus:border-primary/100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                placeholder="Search Product..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-1.5 bottom-1.5 bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/100 font-medium rounded-lg text-sm px-4 py-2"
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

      <section className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <ShadCNButton>
              <ShoppingCart />
            </ShadCNButton>
          </SheetTrigger>
          <SheetContent>
            <Detail details={orderDetails} />
          </SheetContent>
        </Sheet>
      </section>
    </header>
  );

  return (
    <Main>
      <section className="col-span-12 sm:col-span-12 md:col-span-8 xl:col-span-9 ">
        {headers}
        <>
          <div className=" flex mt-3 pb-2 items-center overflow-auto scroll-smooth whitespace-nowrap custom-scrollbar gap-x-2 ">
            <div className="flex-1 flex gap-2 justify-center items-center">
              {/* <Button text="All Menu" dark={true} /> */}
              <ShadCNButton>
                {/* <Image src='/images/menu.png' width={20} height={20} alt="image"></Image> */}
                <p>All Menu</p>
              </ShadCNButton>

              {categories.map((category) => (
                <ShadCNButton key={category.id} variant="outline">
                  {category.icon && (
                    <Image
                      src={category.icon}
                      width={20}
                      height={20}
                      alt={`${category.text} Icon`}
                    />
                  )}
                  <p>{category.text}</p>
                </ShadCNButton>
              ))}
            </div>
          </div>
        </>
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 items-center justify-center w-full lg:grid-cols-4 gap-3">
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
        <footer className="mt-4 p-4 sm:p-10 grid place-items-center bg-primary">
          <div className="text-center">
            <span className="text-sm text-white">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Shop™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </section>
      <section className="hidden md:grid md:col-span-4 xl:col-span-3 ml-4">
        <>
          <Detail details={orderDetails} />
        </>
      </section>
    </Main>
  );
}
