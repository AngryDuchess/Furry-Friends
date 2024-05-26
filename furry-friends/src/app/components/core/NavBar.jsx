"use client";
import { HambergerMenu } from "iconsax-react";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 backdrop-filter backdrop-blur-md bg-opacity-50 border-b-[1px] border-gray-500 dark:bg-gray-900 sticky z-20 top-0 start-0 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-4 md:mx-16 p-4">
          <Link
            href="/landingpage"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.svg"></img>
          </Link>
          <div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href="/signin">
            <button
              type="button"
              //   style={{backgroundColor: 'var(--accent-100)'}}
              className=" hidden md:block text-accent bg-white lg:px-8 py-4 font-medium rounded-full text-sm px-8 text-center hover:bg-red-100 "
              >
              Log in
            </button>
              </Link>
            <Link href="/signup">
            <button
              type="button"
              // style={{ backgroundColor: "var(--accent-100)" }}
              className="text-white lg:px-8 py-4 font-medium rounded-full text-sm px-8 text-center bg-accent hover:bg-accentdeep"
            >
                Sign up
            </button>
              </Link>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover: focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <HambergerMenu
                size="32"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              />
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col text-sm font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md: dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent md:text-secondary md:dark:text-secondary"
                  aria-current="page"
                  style={{ color: "var(--secondary)" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondarypale md:dark:hover:text-secondarypale dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Why adopt?
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondarypale md:dark:hover:text-secondarypale dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Paw-some tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondarypale md:dark:hover:text-secondarypale dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondarypale md:dark:hover:text-secondarypale dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Be a pet hero
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}