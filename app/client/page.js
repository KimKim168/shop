import Main from "@/components/Main";
import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Detail from "@/components/Detail";
import Header from "@/components/Header";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Fugaz_One } from "next/font/google";
import {
  BellIcon,
  CoffeeIcon,
  Menu,
  MenuIcon,
  ShoppingCart,
  SlidersHorizontal,
  XIcon,
} from "lucide-react";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function page() {
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
    {
      id: 10,
      text: "Instant + RTD",
      icon: "/images/product2.jpg",
    },
    {
      id: 11,
      text: "Ceramics",
      icon: "/images/coffee.png",
    },
  ];

  const headers = (
    <header>
      <AlertDialog>
        <AlertDialogTrigger>
          {/* Logo */}
          <div className="flex text-start  mt-5 items-center">
            <div className="space-x-3 px-2">
              <ShadCNButton className="py-[28px] px-1 sm:py-[50px] rounded-none sm:px-2">
                <Image
                  src="/images/logo.webp"
                  width={80}
                  height={80}
                  alt="image"
                  className="rounded-md w-12 sm:w-20 "
                ></Image>
              </ShadCNButton>
            </div>
            <div className="space-y-1 sm:space-y-2 ml-2">
              <p className="font-bold text-md sm:text-xl">Scholar Library</p>
              <hr className="border-[#4d489d]" />
              <p className="text-sm sm:text-md">
                Tell: 012345987 | Telegram: 0982828
              </p>
            </div>
          </div>
        </AlertDialogTrigger>

        {/* Payment Arlert */}
        <AlertDialogContent>
          <div>
            <div className="absolute top-0 left-0 rounded-t-md bg-slate-300 w-full h-44">
              {/* <Image
              src="/images/logo.webp"
              width={150}
              height={150}
              alt="image"
            ></Image> */}
            </div>
            <AlertDialogCancel className="relative  text-black hover:text-white  w-2  border ">
              <XIcon style={{ width: 20, height: 20 }}></XIcon>
            </AlertDialogCancel>
          </div>
          <AlertDialogDescription>
            <div>
              <div className="my-5 flex justify-center items-center">
                <Image
                  src="/images/logo.webp"
                  width={150}
                  height={150}
                  alt="image"
                  className="rounded-full z-20"
                ></Image>
              </div>
              <div className=" flex flex-col text-center justify-center items-center">
                <h1 className="font-bold text-black text-xl sm:text-2xl">
                  Scholar Library
                </h1>
                <p className="text-black sm:text-xl">
                  RedBox restaurant is a comfortable, brasserie-style restaurant
                  offering everything you love about asia cuisine without the
                  attitude. Our restaurant features classic dishes such as
                  Grilled Giant Squid and Crispy Duck Tongue Garlic, as well as
                  fresh salads and juicy hamburgers made with fresh-ground beef.
                </p>
                <div className="mt-10 grid grid-cols-4 sm:flex  gap-5 justify-items-center items-center">
                  <a>
                    <Image
                      src="/images/facebook.png"
                      width={40}
                      height={40}
                      alt="image"
                      className="rounded-full"
                    />
                  </a>
                  <a>
                    <Image
                      src="/images/telegram.png"
                      width={40}
                      height={40}
                      alt="image"
                      className="rounded-full"
                    />
                  </a>
                  <a>
                    <Image
                      src="/images/tiktok.png"
                      width={40}
                      height={40}
                      alt="image"
                      className="rounded-full"
                    />
                  </a>
                  <a className="flex justify-center items-center">
                    <Image
                      src="/images/map.png"
                      width={40}
                      height={40}
                      alt="image"
                      className="rounded-full bg-gray-100"
                    />
                  </a>
                  <a className="flex justify-center items-center col-span-5 sm:col-span-1 md:col-span-1">
                    <Image
                      src="/images/call.png"
                      width={40}
                      height={40}
                      alt="image"
                      className="rounded-full mr-3"
                    />
                    <p className="text-green-800 text-xl">012345987</p>
                  </a>
                </div>
              </div>
            </div>
            <AlertDialogFooter className="mt-10"></AlertDialogFooter>
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>

      <div className="mt-3 px-2  flex items-center justify-between gap-4  ">
        <div className="gap-4 flex w-full justify-center items-center">
          {/* Mobile Menu Toggle */}
          {/* <ShadCNButton variant="outline" size="icon" className="shrink-0">
            <MenuIcon />
          </ShadCNButton> */}
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

                {/* Error here <button> tag */}
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

        {/* <ShadCNButton variant="outline" size="icon" className="shrink-0">
          <SlidersHorizontal />
        </ShadCNButton> */}

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
      </div>
    </header>
  );
  return (
    <Main>
      <section className="col-span-12  ">
        {headers}
        <>
          <div className="px-2 flex mt-3 pb-2 items-center overflow-auto scroll-smooth whitespace-nowrap custom-scrollbar gap-x-2 ">
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
          <div className="px-2 grid grid-cols-1 mb-10 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 items-center justify-center w-full lg:grid-cols-4 gap-3">
            {/* Start */}
            <AlertDialog>
              <AlertDialogTrigger className="w-full text-start">
                <Card
                  image="/images/product3.webp"
                  title="Fellow Clara French Press"
                  id="10"
                  price="11.00$"
                  discount="0.50$"
                />
              </AlertDialogTrigger>

              {/* Payment Arlert */}
              <AlertDialogContent className="w-auto p-4 gap-0">
                <div>
                  <AlertDialogCancel className=" mt-0 p-3 h-3 text-black hover:text-white w-1 border ">
                    <XIcon style={{ width: 15, height: 15 }}></XIcon>
                  </AlertDialogCancel>
                </div>
                <AlertDialogDescription className="min-w-80 ">
                  <div className="rounded-lg ">
                    <div className="flex items-center justify-center">
                      <Image
                        className="rounded-lg aspect-[1/1] object-cover"
                        src="/images/product3.webp"
                        alt="Noteworthy technology acquisitions 2021"
                        width={300} // Static width for large screens
                        height={300} // Static height for large screens
                        style={{ objectFit: "cover" }} // Ensures the image fills its container while keeping its aspect
                      />
                    </div>
                    <div>
                      <div className="px-1 py-3  text-sm grid grid-cols-5 ">
                        <a href="#" className="col-span-3">
                          <h5 className=" line-clamp-2  text-gray-900 dark:text-white">
                            Fellow Clara French Press
                          </h5>
                          <p className="mt-2">
                            ID: <span>10</span>
                          </p>
                        </a>
                        <div className="col-span-2 text-right text-primary">
                          <p className="flex flex-col">
                            <p>11.00$</p>
                            <p className="line-through mt-2 decoration-red-600 text-red-600">
                              12.50$
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 grid grid-cols-4  sm:flex sm:space-x-3 md:mx-10 justify-items-center items-center">
                      <a href="https://facebook.com" aria-label="Facebook link">
                        <Image
                          src="/images/facebook.png"
                          width={40}
                          height={40}
                          alt="Facebook"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://telegram.org" aria-label="Telegram link">
                        <Image
                          src="/images/telegram.png"
                          width={40}
                          height={40}
                          alt="Telegram"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://tiktok.com" aria-label="TikTok link">
                        <Image
                          src="/images/tiktok.png"
                          width={40}
                          height={40}
                          alt="TikTok"
                          className="rounded-full"
                        />
                      </a>
                      <a
                        href="https://google.com/maps"
                        className="flex justify-center items-center"
                        aria-label="Map link"
                      >
                        <Image
                          src="/images/map.png"
                          width={40}
                          height={40}
                          alt="Map"
                          className="rounded-full bg-gray-400"
                        />
                      </a>
                      <a
                        href="tel:+012345987"
                        className="flex justify-center mt-2 sm:mt-0 items-center col-span-4 sm:col-span-1 md:col-span-1"
                      >
                        <Image
                          src="/images/call.png"
                          width={40}
                          height={40}
                          alt="Call"
                          className="rounded-full mr-3"
                        />
                        <p className="text-green-800 text-md">012345987</p>
                      </a>
                    </div>
                  </div>
                  <AlertDialogFooter className="mt-10"></AlertDialogFooter>
                </AlertDialogDescription>
              </AlertDialogContent>
            </AlertDialog>
            {/* Ent */}
            {/* Start */}
            <AlertDialog>
              <AlertDialogTrigger className="w-full text-start">
                <Card
                  image="/images/product3.webp"
                  title="Fellow Clara French Press"
                  id="10"
                  price="11.00$"
                  discount="0.50$"
                />
              </AlertDialogTrigger>

              {/* Payment Arlert */}
              <AlertDialogContent className="w-auto p-4 gap-0">
                <div>
                  <AlertDialogCancel className=" mt-0 p-3 h-3 text-black hover:text-white w-1 border ">
                    <XIcon style={{ width: 15, height: 15 }}></XIcon>
                  </AlertDialogCancel>
                </div>
                <AlertDialogDescription className="min-w-80 ">
                  <div className="rounded-lg ">
                    <div className="flex items-center justify-center">
                      <Image
                        className="rounded-lg aspect-[1/1] object-cover"
                        src="/images/product3.webp"
                        alt="Noteworthy technology acquisitions 2021"
                        width={300} // Static width for large screens
                        height={300} // Static height for large screens
                        style={{ objectFit: "cover" }} // Ensures the image fills its container while keeping its aspect
                      />
                    </div>
                    <div>
                      <div className="px-1 py-3  text-sm grid grid-cols-5 ">
                        <a href="#" className="col-span-3">
                          <h5 className=" line-clamp-2  text-gray-900 dark:text-white">
                            Fellow Clara French Press
                          </h5>
                          <p className="mt-2">
                            ID: <span>10</span>
                          </p>
                        </a>
                        <div className="col-span-2 text-right text-primary">
                          <p className="flex flex-col">
                            <p>11.00$</p>
                            <p className="line-through mt-2 decoration-red-600 text-red-600">
                              12.50$
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 grid grid-cols-4  sm:flex sm:space-x-3 md:mx-10 justify-items-center items-center">
                      <a href="https://facebook.com" aria-label="Facebook link">
                        <Image
                          src="/images/facebook.png"
                          width={40}
                          height={40}
                          alt="Facebook"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://telegram.org" aria-label="Telegram link">
                        <Image
                          src="/images/telegram.png"
                          width={40}
                          height={40}
                          alt="Telegram"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://tiktok.com" aria-label="TikTok link">
                        <Image
                          src="/images/tiktok.png"
                          width={40}
                          height={40}
                          alt="TikTok"
                          className="rounded-full"
                        />
                      </a>
                      <a
                        href="https://google.com/maps"
                        className="flex justify-center items-center"
                        aria-label="Map link"
                      >
                        <Image
                          src="/images/map.png"
                          width={40}
                          height={40}
                          alt="Map"
                          className="rounded-full bg-gray-400"
                        />
                      </a>
                      <a
                        href="tel:+012345987"
                        className="flex justify-center mt-2 sm:mt-0 items-center col-span-4 sm:col-span-1 md:col-span-1"
                      >
                        <Image
                          src="/images/call.png"
                          width={40}
                          height={40}
                          alt="Call"
                          className="rounded-full mr-3"
                        />
                        <p className="text-green-800 text-md">012345987</p>
                      </a>
                    </div>
                  </div>
                  <AlertDialogFooter className="mt-10"></AlertDialogFooter>
                </AlertDialogDescription>
              </AlertDialogContent>
            </AlertDialog>
            {/* Ent */}
            {/* Start */}
            <AlertDialog>
              <AlertDialogTrigger className="w-full text-start">
                <Card
                  image="/images/product3.webp"
                  title="Fellow Clara French Press"
                  id="10"
                  price="11.00$"
                  discount="0.50$"
                />
              </AlertDialogTrigger>

              {/* Payment Arlert */}
              <AlertDialogContent className="w-auto p-4 gap-0">
                <div>
                  <AlertDialogCancel className=" mt-0 p-3 h-3 text-black hover:text-white w-1 border ">
                    <XIcon style={{ width: 15, height: 15 }}></XIcon>
                  </AlertDialogCancel>
                </div>
                <AlertDialogDescription className="min-w-80 ">
                  <div className="rounded-lg ">
                    <div className="flex items-center justify-center">
                      <Image
                        className="rounded-lg aspect-[1/1] object-cover"
                        src="/images/product3.webp"
                        alt="Noteworthy technology acquisitions 2021"
                        width={300} // Static width for large screens
                        height={300} // Static height for large screens
                        style={{ objectFit: "cover" }} // Ensures the image fills its container while keeping its aspect
                      />
                    </div>
                    <div>
                      <div className="px-1 py-3  text-sm grid grid-cols-5 ">
                        <a href="#" className="col-span-3">
                          <h5 className=" line-clamp-2  text-gray-900 dark:text-white">
                            Fellow Clara French Press
                          </h5>
                          <p className="mt-2">
                            ID: <span>10</span>
                          </p>
                        </a>
                        <div className="col-span-2 text-right text-primary">
                          <p className="flex flex-col">
                            <p>11.00$</p>
                            <p className="line-through mt-2 decoration-red-600 text-red-600">
                              12.50$
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 grid grid-cols-4  sm:flex sm:space-x-3 md:mx-10 justify-items-center items-center">
                      <a href="https://facebook.com" aria-label="Facebook link">
                        <Image
                          src="/images/facebook.png"
                          width={40}
                          height={40}
                          alt="Facebook"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://telegram.org" aria-label="Telegram link">
                        <Image
                          src="/images/telegram.png"
                          width={40}
                          height={40}
                          alt="Telegram"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://tiktok.com" aria-label="TikTok link">
                        <Image
                          src="/images/tiktok.png"
                          width={40}
                          height={40}
                          alt="TikTok"
                          className="rounded-full"
                        />
                      </a>
                      <a
                        href="https://google.com/maps"
                        className="flex justify-center items-center"
                        aria-label="Map link"
                      >
                        <Image
                          src="/images/map.png"
                          width={40}
                          height={40}
                          alt="Map"
                          className="rounded-full bg-gray-400"
                        />
                      </a>
                      <a
                        href="tel:+012345987"
                        className="flex justify-center mt-2 sm:mt-0 items-center col-span-4 sm:col-span-1 md:col-span-1"
                      >
                        <Image
                          src="/images/call.png"
                          width={40}
                          height={40}
                          alt="Call"
                          className="rounded-full mr-3"
                        />
                        <p className="text-green-800 text-md">012345987</p>
                      </a>
                    </div>
                  </div>
                  <AlertDialogFooter className="mt-10"></AlertDialogFooter>
                </AlertDialogDescription>
              </AlertDialogContent>
            </AlertDialog>
            {/* Ent */}
            {/* Start */}
            <AlertDialog>
              <AlertDialogTrigger className="w-full text-start">
                <Card
                  image="/images/product3.webp"
                  title="Fellow Clara French Press"
                  id="10"
                  price="11.00$"
                  discount="0.50$"
                />
              </AlertDialogTrigger>

              {/* Payment Arlert */}
              <AlertDialogContent className="w-auto p-4 gap-0">
                <div>
                  <AlertDialogCancel className=" mt-0 p-3 h-3 text-black hover:text-white w-1 border ">
                    <XIcon style={{ width: 15, height: 15 }}></XIcon>
                  </AlertDialogCancel>
                </div>
                <AlertDialogDescription className="min-w-80 ">
                  <div className="rounded-lg ">
                    <div className="flex items-center justify-center">
                      <Image
                        className="rounded-lg aspect-[1/1] object-cover"
                        src="/images/product3.webp"
                        alt="Noteworthy technology acquisitions 2021"
                        width={300} // Static width for large screens
                        height={300} // Static height for large screens
                        style={{ objectFit: "cover" }} // Ensures the image fills its container while keeping its aspect
                      />
                    </div>
                    <div>
                      <div className="px-1 py-3  text-sm grid grid-cols-5 ">
                        <a href="#" className="col-span-3">
                          <h5 className=" line-clamp-2  text-gray-900 dark:text-white">
                            Fellow Clara French Press
                          </h5>
                          <p className="mt-2">
                            ID: <span>10</span>
                          </p>
                        </a>
                        <div className="col-span-2 text-right text-primary">
                          <p className="flex flex-col">
                            <p>11.00$</p>
                            <p className="line-through mt-2 decoration-red-600 text-red-600">
                              12.50$
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 grid grid-cols-4  sm:flex sm:space-x-3 md:mx-10 justify-items-center items-center">
                      <a href="https://facebook.com" aria-label="Facebook link">
                        <Image
                          src="/images/facebook.png"
                          width={40}
                          height={40}
                          alt="Facebook"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://telegram.org" aria-label="Telegram link">
                        <Image
                          src="/images/telegram.png"
                          width={40}
                          height={40}
                          alt="Telegram"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://tiktok.com" aria-label="TikTok link">
                        <Image
                          src="/images/tiktok.png"
                          width={40}
                          height={40}
                          alt="TikTok"
                          className="rounded-full"
                        />
                      </a>
                      <a
                        href="https://google.com/maps"
                        className="flex justify-center items-center"
                        aria-label="Map link"
                      >
                        <Image
                          src="/images/map.png"
                          width={40}
                          height={40}
                          alt="Map"
                          className="rounded-full bg-gray-400"
                        />
                      </a>
                      <a
                        href="tel:+012345987"
                        className="flex justify-center mt-2 sm:mt-0 items-center col-span-4 sm:col-span-1 md:col-span-1"
                      >
                        <Image
                          src="/images/call.png"
                          width={40}
                          height={40}
                          alt="Call"
                          className="rounded-full mr-3"
                        />
                        <p className="text-green-800 text-md">012345987</p>
                      </a>
                    </div>
                  </div>
                  <AlertDialogFooter className="mt-10"></AlertDialogFooter>
                </AlertDialogDescription>
              </AlertDialogContent>
            </AlertDialog>
            {/* Ent */}
            {/* Start */}
            <AlertDialog>
              <AlertDialogTrigger className="w-full text-start">
                <Card
                  image="/images/product3.webp"
                  title="Fellow Clara French Press"
                  id="10"
                  price="11.00$"
                  discount="0.50$"
                />
              </AlertDialogTrigger>

              {/* Payment Arlert */}
              <AlertDialogContent className="w-auto p-4 gap-0">
                <div>
                  <AlertDialogCancel className=" mt-0 p-3 h-3 text-black hover:text-white w-1 border ">
                    <XIcon style={{ width: 15, height: 15 }}></XIcon>
                  </AlertDialogCancel>
                </div>
                <AlertDialogDescription className="min-w-80 ">
                  <div className="rounded-lg ">
                    <div className="flex items-center justify-center">
                      <Image
                        className="rounded-lg aspect-[1/1] object-cover"
                        src="/images/product3.webp"
                        alt="Noteworthy technology acquisitions 2021"
                        width={300} // Static width for large screens
                        height={300} // Static height for large screens
                        style={{ objectFit: "cover" }} // Ensures the image fills its container while keeping its aspect
                      />
                    </div>
                    <div>
                      <div className="px-1 py-3  text-sm grid grid-cols-5 ">
                        <a href="#" className="col-span-3">
                          <h5 className=" line-clamp-2  text-gray-900 dark:text-white">
                            Fellow Clara French Press
                          </h5>
                          <p className="mt-2">
                            ID: <span>10</span>
                          </p>
                        </a>
                        <div className="col-span-2 text-right text-primary">
                          <p className="flex flex-col">
                            <p>11.00$</p>
                            <p className="line-through mt-2 decoration-red-600 text-red-600">
                              12.50$
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 grid grid-cols-4  sm:flex sm:space-x-3 md:mx-10 justify-items-center items-center">
                      <a href="https://facebook.com" aria-label="Facebook link">
                        <Image
                          src="/images/facebook.png"
                          width={40}
                          height={40}
                          alt="Facebook"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://telegram.org" aria-label="Telegram link">
                        <Image
                          src="/images/telegram.png"
                          width={40}
                          height={40}
                          alt="Telegram"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://tiktok.com" aria-label="TikTok link">
                        <Image
                          src="/images/tiktok.png"
                          width={40}
                          height={40}
                          alt="TikTok"
                          className="rounded-full"
                        />
                      </a>
                      <a
                        href="https://google.com/maps"
                        className="flex justify-center items-center"
                        aria-label="Map link"
                      >
                        <Image
                          src="/images/map.png"
                          width={40}
                          height={40}
                          alt="Map"
                          className="rounded-full bg-gray-400"
                        />
                      </a>
                      <a
                        href="tel:+012345987"
                        className="flex justify-center mt-2 sm:mt-0 items-center col-span-4 sm:col-span-1 md:col-span-1"
                      >
                        <Image
                          src="/images/call.png"
                          width={40}
                          height={40}
                          alt="Call"
                          className="rounded-full mr-3"
                        />
                        <p className="text-green-800 text-md">012345987</p>
                      </a>
                    </div>
                  </div>
                  <AlertDialogFooter className="mt-10"></AlertDialogFooter>
                </AlertDialogDescription>
              </AlertDialogContent>
            </AlertDialog>
            {/* Ent */}
            {/* Start */}
            <AlertDialog>
              <AlertDialogTrigger className="w-full text-start">
                <Card
                  image="/images/product3.webp"
                  title="Fellow Clara French Press"
                  id="10"
                  price="11.00$"
                  discount="0.50$"
                />
              </AlertDialogTrigger>

              {/* Payment Arlert */}
              <AlertDialogContent className="w-auto p-4 gap-0">
                <div>
                  <AlertDialogCancel className=" mt-0 p-3 h-3 text-black hover:text-white w-1 border ">
                    <XIcon style={{ width: 15, height: 15 }}></XIcon>
                  </AlertDialogCancel>
                </div>
                <AlertDialogDescription className="min-w-80 ">
                  <div className="rounded-lg ">
                    <div className="flex items-center justify-center">
                      <Image
                        className="rounded-lg aspect-[1/1] object-cover"
                        src="/images/product3.webp"
                        alt="Noteworthy technology acquisitions 2021"
                        width={300} // Static width for large screens
                        height={300} // Static height for large screens
                        style={{ objectFit: "cover" }} // Ensures the image fills its container while keeping its aspect
                      />
                    </div>
                    <div>
                      <div className="px-1 py-3  text-sm grid grid-cols-5 ">
                        <a href="#" className="col-span-3">
                          <h5 className=" line-clamp-2  text-gray-900 dark:text-white">
                            Fellow Clara French Press
                          </h5>
                          <p className="mt-2">
                            ID: <span>10</span>
                          </p>
                        </a>
                        <div className="col-span-2 text-right text-primary">
                          <p className="flex flex-col">
                            <p>11.00$</p>
                            <p className="line-through mt-2 decoration-red-600 text-red-600">
                              12.50$
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 grid grid-cols-4  sm:flex sm:space-x-3 md:mx-10 justify-items-center items-center">
                      <a href="https://facebook.com" aria-label="Facebook link">
                        <Image
                          src="/images/facebook.png"
                          width={40}
                          height={40}
                          alt="Facebook"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://telegram.org" aria-label="Telegram link">
                        <Image
                          src="/images/telegram.png"
                          width={40}
                          height={40}
                          alt="Telegram"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://tiktok.com" aria-label="TikTok link">
                        <Image
                          src="/images/tiktok.png"
                          width={40}
                          height={40}
                          alt="TikTok"
                          className="rounded-full"
                        />
                      </a>
                      <a
                        href="https://google.com/maps"
                        className="flex justify-center items-center"
                        aria-label="Map link"
                      >
                        <Image
                          src="/images/map.png"
                          width={40}
                          height={40}
                          alt="Map"
                          className="rounded-full bg-gray-400"
                        />
                      </a>
                      <a
                        href="tel:+012345987"
                        className="flex justify-center mt-2 sm:mt-0 items-center col-span-4 sm:col-span-1 md:col-span-1"
                      >
                        <Image
                          src="/images/call.png"
                          width={40}
                          height={40}
                          alt="Call"
                          className="rounded-full mr-3"
                        />
                        <p className="text-green-800 text-md">012345987</p>
                      </a>
                    </div>
                  </div>
                  <AlertDialogFooter className="mt-10"></AlertDialogFooter>
                </AlertDialogDescription>
              </AlertDialogContent>
            </AlertDialog>
            {/* Ent */}
            {/* Start */}
            <AlertDialog>
              <AlertDialogTrigger className="w-full text-start">
                <Card
                  image="/images/product3.webp"
                  title="Fellow Clara French Press"
                  id="10"
                  price="11.00$"
                  discount="0.50$"
                />
              </AlertDialogTrigger>

              {/* Payment Arlert */}
              <AlertDialogContent className="w-auto p-4 gap-0">
                <div>
                  <AlertDialogCancel className=" mt-0 p-3 h-3 text-black hover:text-white w-1 border ">
                    <XIcon style={{ width: 15, height: 15 }}></XIcon>
                  </AlertDialogCancel>
                </div>
                <AlertDialogDescription className="min-w-80 ">
                  <div className="rounded-lg ">
                    <div className="flex items-center justify-center">
                      <Image
                        className="rounded-lg aspect-[1/1] object-cover"
                        src="/images/product3.webp"
                        alt="Noteworthy technology acquisitions 2021"
                        width={300} // Static width for large screens
                        height={300} // Static height for large screens
                        style={{ objectFit: "cover" }} // Ensures the image fills its container while keeping its aspect
                      />
                    </div>
                    <div>
                      <div className="px-1 py-3  text-sm grid grid-cols-5 ">
                        <a href="#" className="col-span-3">
                          <h5 className=" line-clamp-2  text-gray-900 dark:text-white">
                            Fellow Clara French Press
                          </h5>
                          <p className="mt-2">
                            ID: <span>10</span>
                          </p>
                        </a>
                        <div className="col-span-2 text-right text-primary">
                          <p className="flex flex-col">
                            <p>11.00$</p>
                            <p className="line-through mt-2 decoration-red-600 text-red-600">
                              12.50$
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 grid grid-cols-4  sm:flex sm:space-x-3 md:mx-10 justify-items-center items-center">
                      <a href="https://facebook.com" aria-label="Facebook link">
                        <Image
                          src="/images/facebook.png"
                          width={40}
                          height={40}
                          alt="Facebook"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://telegram.org" aria-label="Telegram link">
                        <Image
                          src="/images/telegram.png"
                          width={40}
                          height={40}
                          alt="Telegram"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://tiktok.com" aria-label="TikTok link">
                        <Image
                          src="/images/tiktok.png"
                          width={40}
                          height={40}
                          alt="TikTok"
                          className="rounded-full"
                        />
                      </a>
                      <a
                        href="https://google.com/maps"
                        className="flex justify-center items-center"
                        aria-label="Map link"
                      >
                        <Image
                          src="/images/map.png"
                          width={40}
                          height={40}
                          alt="Map"
                          className="rounded-full bg-gray-400"
                        />
                      </a>
                      <a
                        href="tel:+012345987"
                        className="flex justify-center mt-2 sm:mt-0 items-center col-span-4 sm:col-span-1 md:col-span-1"
                      >
                        <Image
                          src="/images/call.png"
                          width={40}
                          height={40}
                          alt="Call"
                          className="rounded-full mr-3"
                        />
                        <p className="text-green-800 text-md">012345987</p>
                      </a>
                    </div>
                  </div>
                  <AlertDialogFooter className="mt-10"></AlertDialogFooter>
                </AlertDialogDescription>
              </AlertDialogContent>
            </AlertDialog>
            {/* Ent */}
            {/* Start */}
            <AlertDialog>
              <AlertDialogTrigger className="w-full text-start">
                <Card
                  image="/images/product3.webp"
                  title="Fellow Clara French Press"
                  id="10"
                  price="11.00$"
                  discount="0.50$"
                />
              </AlertDialogTrigger>

              {/* Payment Arlert */}
              <AlertDialogContent className="w-auto p-4 gap-0">
                <div>
                  <AlertDialogCancel className=" mt-0 p-3 h-3 text-black hover:text-white w-1 border ">
                    <XIcon style={{ width: 15, height: 15 }}></XIcon>
                  </AlertDialogCancel>
                </div>
                <AlertDialogDescription className="min-w-80 ">
                  <div className="rounded-lg ">
                    <div className="flex items-center justify-center">
                      <Image
                        className="rounded-lg aspect-[1/1] object-cover"
                        src="/images/product3.webp"
                        alt="Noteworthy technology acquisitions 2021"
                        width={300} // Static width for large screens
                        height={300} // Static height for large screens
                        style={{ objectFit: "cover" }} // Ensures the image fills its container while keeping its aspect
                      />
                    </div>
                    <div>
                      <div className="px-1 py-3  text-sm grid grid-cols-5 ">
                        <a href="#" className="col-span-3">
                          <h5 className=" line-clamp-2  text-gray-900 dark:text-white">
                            Fellow Clara French Press
                          </h5>
                          <p className="mt-2">
                            ID: <span>10</span>
                          </p>
                        </a>
                        <div className="col-span-2 text-right text-primary">
                          <p className="flex flex-col">
                            <p>11.00$</p>
                            <p className="line-through mt-2 decoration-red-600 text-red-600">
                              12.50$
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 grid grid-cols-4  sm:flex sm:space-x-3 md:mx-10 justify-items-center items-center">
                      <a href="https://facebook.com" aria-label="Facebook link">
                        <Image
                          src="/images/facebook.png"
                          width={40}
                          height={40}
                          alt="Facebook"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://telegram.org" aria-label="Telegram link">
                        <Image
                          src="/images/telegram.png"
                          width={40}
                          height={40}
                          alt="Telegram"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://tiktok.com" aria-label="TikTok link">
                        <Image
                          src="/images/tiktok.png"
                          width={40}
                          height={40}
                          alt="TikTok"
                          className="rounded-full"
                        />
                      </a>
                      <a
                        href="https://google.com/maps"
                        className="flex justify-center items-center"
                        aria-label="Map link"
                      >
                        <Image
                          src="/images/map.png"
                          width={40}
                          height={40}
                          alt="Map"
                          className="rounded-full bg-gray-400"
                        />
                      </a>
                      <a
                        href="tel:+012345987"
                        className="flex justify-center mt-2 sm:mt-0 items-center col-span-4 sm:col-span-1 md:col-span-1"
                      >
                        <Image
                          src="/images/call.png"
                          width={40}
                          height={40}
                          alt="Call"
                          className="rounded-full mr-3"
                        />
                        <p className="text-green-800 text-md">012345987</p>
                      </a>
                    </div>
                  </div>
                  <AlertDialogFooter className="mt-10"></AlertDialogFooter>
                </AlertDialogDescription>
              </AlertDialogContent>
            </AlertDialog>
            {/* Ent */}
            {/* Start */}
            <AlertDialog>
              <AlertDialogTrigger className="w-full text-start">
                <Card
                  image="/images/product3.webp"
                  title="Fellow Clara French Press"
                  id="10"
                  price="11.00$"
                  discount="0.50$"
                />
              </AlertDialogTrigger>

              {/* Payment Arlert */}
              <AlertDialogContent className="w-auto p-4 gap-0">
                <div>
                  <AlertDialogCancel className=" mt-0 p-3 h-3 text-black hover:text-white w-1 border ">
                    <XIcon style={{ width: 15, height: 15 }}></XIcon>
                  </AlertDialogCancel>
                </div>
                <AlertDialogDescription className="min-w-80 ">
                  <div className="rounded-lg ">
                    <div className="flex items-center justify-center">
                      <Image
                        className="rounded-lg aspect-[1/1] object-cover"
                        src="/images/product3.webp"
                        alt="Noteworthy technology acquisitions 2021"
                        width={300} // Static width for large screens
                        height={300} // Static height for large screens
                        style={{ objectFit: "cover" }} // Ensures the image fills its container while keeping its aspect
                      />
                    </div>
                    <div>
                      <div className="px-1 py-3  text-sm grid grid-cols-5 ">
                        <a href="#" className="col-span-3">
                          <h5 className=" line-clamp-2  text-gray-900 dark:text-white">
                            Fellow Clara French Press
                          </h5>
                          <p className="mt-2">
                            ID: <span>10</span>
                          </p>
                        </a>
                        <div className="col-span-2 text-right text-primary">
                          <p className="flex flex-col">
                            <p>11.00$</p>
                            <p className="line-through mt-2 decoration-red-600 text-red-600">
                              12.50$
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 grid grid-cols-4  sm:flex sm:space-x-3 md:mx-10 justify-items-center items-center">
                      <a href="https://facebook.com" aria-label="Facebook link">
                        <Image
                          src="/images/facebook.png"
                          width={40}
                          height={40}
                          alt="Facebook"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://telegram.org" aria-label="Telegram link">
                        <Image
                          src="/images/telegram.png"
                          width={40}
                          height={40}
                          alt="Telegram"
                          className="rounded-full"
                        />
                      </a>
                      <a href="https://tiktok.com" aria-label="TikTok link">
                        <Image
                          src="/images/tiktok.png"
                          width={40}
                          height={40}
                          alt="TikTok"
                          className="rounded-full"
                        />
                      </a>
                      <a
                        href="https://google.com/maps"
                        className="flex justify-center items-center"
                        aria-label="Map link"
                      >
                        <Image
                          src="/images/map.png"
                          width={40}
                          height={40}
                          alt="Map"
                          className="rounded-full bg-gray-400"
                        />
                      </a>
                      <a
                        href="tel:+012345987"
                        className="flex justify-center mt-2 sm:mt-0 items-center col-span-4 sm:col-span-1 md:col-span-1"
                      >
                        <Image
                          src="/images/call.png"
                          width={40}
                          height={40}
                          alt="Call"
                          className="rounded-full mr-3"
                        />
                        <p className="text-green-800 text-md">012345987</p>
                      </a>
                    </div>
                  </div>
                  <AlertDialogFooter className="mt-10"></AlertDialogFooter>
                </AlertDialogDescription>
              </AlertDialogContent>
            </AlertDialog>
            {/* Ent */}
          </div>
        </>
      </section>

      <footer className="max-w-screen-2xl col-span-12   w-full  z-70 fixed bottom-0">
        <div className="text-center">
          <span className="text-sm text-black">
            © 2024 . All Rights Reserved.
          </span>
        </div>
      </footer>
    </Main>
  );
}
