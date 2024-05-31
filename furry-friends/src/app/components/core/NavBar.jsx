"use client";
import { HambergerMenu } from "iconsax-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import isAuthenticated from "@/lib/isAuthenticated";
import { User } from "iconsax-react";
import { Dropdown } from "flowbite-react";

export default function NavBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [LoggedIn, setLoggedIn] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/signin");
  };

  const handleSelect = (tabitem) => {
    setSelectedTab(tabitem);
  }

  const getLinkClassName = (path) => {
    return router.pathname === path ? 'text-secondary bg-accent lg:bg-none' : 'text-white';
  };


  return (
    <>
      <nav className="bg-gray-900 backdrop-filter backdrop-blur-md bg-opacity-50 border-b-[1px] border-gray-500 dark:bg-gray-900 sticky z-20 top-0 start-0 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-4 md:mx-16 p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.svg" alt="logo" />
          </Link>
          <div className="flex items-center gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isAuthenticated() ? (
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={<User size="24" color="#222222" variant="Bold" />}
                >
                  <Dropdown.Header>
                    <span className="block text-sm">Teddy Mahama</span>
                    <span className="block truncate text-sm font-medium">
                      name@furryfriends.com
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                </Dropdown>
              </div>
            ) : (
              <>
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
              </>
            )}
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
                  href="/"
                  className={`${selectedTab ==='Home' ? 'text-secondary bg-accent lg:bg-none' : "lg:text-white"} block py-2 px-3 md:p-0 rounded md:bg-transparent md:text-secondary md:dark:text-secondary}`}
                //  className={`${getLinkClassName('/')} block py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-secondary}`}
                //  aria-current={router.pathname === '/' ? "page" : undefined}
                  aria-current={`${selectedTab ==='Home' ? "page" : undefined}`}
                  onClick={() => handleSelect("Home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/why-adopt"
                  className={` ${selectedTab ==='Why adopt?' ? 'text-secondary bg-accent lg:bg-none' : "lg:text-white"} block py-2 px-3 md:p-0  rounded md:bg-transparent md:text-secondary md:dark:text-secondary}`}
                  aria-current={`${selectedTab ==='Why adopt?' ? "page" : undefined}`}
                  onClick={() => handleSelect("Why adopt?")}
                >
                  Why adopt?
                </a>
              </li>
              <li>
                <a
                  href="/tips"
                  className={` ${selectedTab ==='Paw-some tips' ? 'text-secondary bg-accent lg:bg-none' : "lg:text-white"} block py-2 px-3 md:p-0 rounded md:bg-transparent md:text-secondary md:dark:text-secondary}`}
                  aria-current={`${selectedTab ==='Paw-some tips' ? "page" : undefined}`}
                  onClick={() => handleSelect("Paw-some tips")}
                >
                  Paw-some tips
                </a>
              </li>
              <li>
                <a
                  href="/pets"
                  className={` ${selectedTab ==='Our pets' ? 'text-secondary bg-accent lg:bg-none' : "lg:text-white"} block py-2 px-3 md:p-0  rounded md:bg-transparent md:text-secondary md:dark:text-secondary}`}
                  aria-current={`${selectedTab ==="Our pets" ? "page" : undefined}`}
                  onClick={() => handleSelect("Our pets")}

                >
                  Our pets
                </a>
              </li>
              <li>
                <a
                  href="/donate"
                  className={` ${selectedTab ==='Be a pet hero' ? 'text-secondary bg-accent lg:bg-none' : "lg:text-white"} block py-2 px-3 md:p-0 rounded md:bg-transparent md:text-secondary md:dark:text-secondary}`}
                //  className={`${getLinkClassName('/donate')} block py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-secondary}`}
                //  aria-current={router.pathname === '/donate' ? "page" : undefined}
                aria-current={`${selectedTab ==="Be a pet hero" ? "page" : undefined}`}
                  
                  onClick={() => handleSelect("Be a pet hero")}
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
