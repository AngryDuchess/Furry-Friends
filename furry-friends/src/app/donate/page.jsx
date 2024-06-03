"use client";
import { merriweather } from "@/app/fonts";
import { Button, Spinner } from "flowbite-react";
import { useState } from "react";
import DonationCompleteModal from "../components/modals/DonationComplete";
import withNavBar from "../components/HOC/withNavBar";

function Donate() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleSelect = (button) => {
    setSelectedButton(button);
  };

  const handleSelectedAmount = (button) => {
    setSelectedAmount(button);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenModal(true);
    }, 2000);
  };

  return (
    <>
      <div className="flex flex-col gap-12 my-16 mx-4 lg:flex-row lg:m-16">
        <div className="flex flex-col gap-3 text-dark">
          <p className="text-accent font-bold text-sm">Be a pet Hero</p>
          <p
            className={`${merriweather.className} leading-10 text-3xl`}
          >
            Become a Champion for
            <br /> <span className="text-accent">Our Furry Friends!</span>
          </p>
          <p>
            By becoming a Pet Hero, you can make a significant difference in the
            lives of animals in need.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <div className="text-dark">
            <p className="font-bold text-xl">Choose an amount to give</p>
            <p className="text-sm">
              Every donation helps us provide food, medical care, and shelter
              for pets in need. Whether it&apos;s a one-time gift or a recurring
              donation, your generosity goes a long way.
            </p>
          </div>
          <form className="flex flex-col gap-4 border border-greybase pb-4 rounded-lg ">
            <Button.Group className="gap-3 bg-gray-100 text-dark w-full px-2 py-4 border-b border-b-greybase rounded-t-lg">
              <Button
                className={`w-3/4 ${
                  selectedButton === "one-time" ? "bg-accent text-white" : ""
                } flex-grow`}
                color="gray"
                onClick={() => handleSelect("one-time")}
              >
                One time
              </Button>
              <Button
                className={` ${
                  selectedButton === "recurring" ? "bg-accent text-white" : ""
                } flex-grow`}
                color="gray"
                onClick={() => handleSelect("recurring")}
              >
                Recurring(monthly)
              </Button>
            </Button.Group>
            <div className="flex flex-col gap-8 py-4 px-2">
              <Button.Group className=" gap-4 text-dark flex-wrap w-full">
                <Button
                  className={`bg-gray-100 ${
                    selectedAmount === "$20" ? "bg-accent text-white" : ""
                  }`}
                  color="gray"
                  onClick={() => handleSelectedAmount("$20")}
                >
                  $20
                </Button>
                <Button
                  className={` bg-gray-100 ${
                    selectedAmount === "$50" ? "bg-accent text-white" : ""
                  }`}
                  color="gray"
                  onClick={() => handleSelectedAmount("$50")}
                >
                  $50
                </Button>
                <Button
                  className={` bg-gray-100 ${
                    selectedAmount === "$100" ? "bg-accent text-white" : ""
                  }`}
                  color="gray"
                  onClick={() => handleSelectedAmount("$100")}
                >
                  $100
                </Button>
                <Button
                  className={`bg-gray-100  ${
                    selectedAmount === "$200" ? "bg-accent text-white" : ""
                  }`}
                  color="gray"
                  onClick={() => handleSelectedAmount("$200")}
                >
                  $200
                </Button>
                <Button
                  className={`bg-gray-100  ${
                    selectedAmount === "other amount"
                      ? "bg-accent text-white"
                      : ""
                  }`}
                  color="gray"
                  onClick={() => handleSelectedAmount("other amount")}
                >
                  other amount
                </Button>
              </Button.Group>
              <div className="flex">
                <div className="flex items-center h-5">
                  <input
                    id="anonymous"
                    value=""
                    name="anonymous"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="feeding"
                  className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >
                  Make me anonymous
                </label>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-semibold text-dark dark:text-white"
                >
                  Add a note (optional)
                </label>
                <textarea
                  id="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-secondary focus:border-secondarydeep block w-full lg:w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondarydeep"
                  placeholder="Your text here..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="flex justify-center text-white mb-3 lg:px-8 py-4 mt-12 font-medium rounded-full text-sm px-8 text-center bg-accent hover:bg-accentdeep w-full"
                onClick={handleSubmit}
              >
                {loading ? (
                  <Spinner />
                ) : (
                  `Donate ${selectedAmount ? selectedAmount : ""}`
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      {openModal && (
        <DonationCompleteModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
}

export default withNavBar(Donate);
