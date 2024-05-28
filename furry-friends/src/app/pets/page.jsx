"use client";
import PetCard from "../components/PetCard";
import { Dropdown } from "flowbite-react";
import { SearchNormal1, ArrowDown2, Link } from "iconsax-react";

export default function Page() {
  return (
    <>
      {/* <NavBar /> */}
      <section className="mx-4 lg:mx-16 my-16 flex flex-col gap-8 ">
        <div className="flex text-dark gap-4 flex-col justify-between lg:flex-row-reverse ">
          <form className="flex items-center gap-1">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchNormal1 size="16" color="#ABABAB" />
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-secondary focus:border-secondarydeep block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondarydeep"
                placeholder="Search..."
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 text-sm font-medium text-white bg-accent rounded-lg border border-accent hover:bg-accentdeep focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-accent dark:hover:bg-accent dark:focus:ring-accentpale"
            >
                <SearchNormal1 size="16" color="#FFFFFF" />
              <span className="sr-only">Search</span>
            </button>
          </form>
          <div className="flex gap-3 overflow-x-auto">
            <Dropdown
              className="text-dark p-2"
              dismissOnClick={false}
              renderTrigger={() => (
                <span className="flex items-center gap-8 border border-greybase rounded-xl p-2 text-sm font-bold">
                  Sex
                  <ArrowDown2 size="16" color="#222222" variant="Bold" />
                </span>
              )}
            >
              <Dropdown.Item>Male</Dropdown.Item>
              <Dropdown.Item>Female</Dropdown.Item>
            </Dropdown>
            <Dropdown
              className="text-dark p-2"
              dismissOnClick={false}
              renderTrigger={() => (
                <span className="flex items-center gap-8 border border-greybase rounded-xl p-2 text-sm font-bold">
                  Breed
                  <ArrowDown2 size="16" color="#222222" variant="Bold" />
                </span>
              )}
            >
              <Dropdown.Item>Beagle</Dropdown.Item>
              <Dropdown.Item>Boer Boel</Dropdown.Item>
            </Dropdown>
            <Dropdown
              className="text-dark p-2"
              dismissOnClick={false}
              renderTrigger={() => (
                <span className="flex items-center gap-8 border border-greybase rounded-xl p-2 text-sm font-bold">
                  Size
                  <ArrowDown2 size="16" color="#222222" variant="Bold" />
                </span>
              )}
            >
              <Dropdown.Item>Small</Dropdown.Item>
              <Dropdown.Item>Large</Dropdown.Item>
            </Dropdown>
            <Dropdown
              className="text-dark p-2"
              dismissOnClick={false}
              renderTrigger={() => (
                <span className="flex items-center gap-8 border border-greybase rounded-xl p-2 text-sm font-bold">
                  Age
                  <ArrowDown2 size="16" color="#222222" variant="Bold" />
                </span>
              )}
            >
              <Dropdown.Item>Puppy</Dropdown.Item>
              <Dropdown.Item>Adult</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="#" >
              <PetCard />
            </a>
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
        </div>
      </section>
    </>
  );
}
