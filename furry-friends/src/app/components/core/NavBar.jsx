"use client";
import { HambergerMenu } from "iconsax-react";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 backdrop-filter backdrop-blur-md bg-opacity-50 border-b-[1px] border-gray-500 dark:bg-gray-900 sticky z-20 top-0 start-0 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.svg"></img>
          </a>
          <div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
            //   style={{backgroundColor: 'var(--accent-100)'}}
              className=" hidden md:block text-accent bg-white lg:px-8 py-4 font-medium rounded-full text-sm px-8 text-center "
            >
              Log in
            </button>
            <button
              type="button"
              style={{backgroundColor: 'var(--accent-100)'}}
              className="text-white lg:px-8 py-4 font-medium rounded-full text-sm px-8 text-center"
            >
              Sign up
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover: focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <HambergerMenu size='32' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" />
              {/* <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg> */}
            </button>
          </div>
          <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} 
          id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md: dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent md:text-secondary md:dark:text-secondary"
                  aria-current="page"
                  style={{color:'var(--secondary)'}}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                 Why adopt?
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Paw-some tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Be a pet hero
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav className='w-full py-4 px-4 bg-gray-900 bg-blur-lg bg-opacity-40 flex flex-row justify-between items-center'>
                <img src="/logo.svg"></img>
                    
                <div className="flex flex-row justify-between gap-5">
                    <button style={{backgroundColor: 'var(--accent)'}} className="py-3 p-8 rounded-full">Sign up</button>
                    <HambergerMenu className="cursor-pointer lg:hidden" size="44" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
            </nav>
            <div className="bg-white text-black font-semibold w-full">
                <ul className={`p-4 lg:flex lg:justify-between ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                    <li className="p-3">Home</li>
                    <li className="p-3">Why adopt?</li>
                    <li className="p-3">Paw-some tips</li>
                    <li className="p-3">Shop</li>
                    <li className="p-3">Be a pet hero</li>
                </ul>
            </div> */}
    </>
  );
}
