import { merriweather } from "@/app/fonts";
import { Modal } from "flowbite-react";
import { CloseCircle } from "iconsax-react";

export default function AdoptionFormModal({ isOpen, onClose }) {
  return (
    <>
      <div className="max-w-xl mx-auto">
        <Modal
          dismissible
          show={isOpen}
          onClose={onClose}
          size="xl"
          position="top-center"
        >
          {/* <Modal.Header>Furry Friends Terms and Conditions</Modal.Header> */}
          <div
            className={`${merriweather.className} overflow-y-auto text-lg py-4 px-6 text-dark flex flex-row justify-between`}
          >
            Book a Call With Us
            <CloseCircle
              className="cursor-pointer"
              color="#ababab"
              variant="Bold"
              size="32"
              onClick={onClose}
            />
          </div>
          <hr />
          <Modal.Body>
            <div className="text-sm font-semibold m-4 rounded-xl py-4 px-6 bg-bluepalest border border-bluebase text-dark">
              Meeting link will be sent to{" "}
              <a href="#" className="text-bluebase hover:underline">
                teddymahama@furryfriends.com
              </a>
              . You can change this in your account settings.
            </div>
            <form className="flex flex-col gap-4 m-4 text-dark font-semibold">
              <div className="py-4 border-b border-gray-300">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-semibold text-dark dark:text-white"
                >
                  Where are you located?
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-secondary focus:border-secondarydeep block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondarydeep"
                  placeholder="Your address"
                  required
                />
              </div>
              <div className="py-4 border-b border-gray-300">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-semibold text-dark dark:text-white"
                >
                  Have you owned a pet before?
                </label>
                <div className="flex flex-col gap-2 items-start">
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="yescheck"
                        value=""
                        name="default-radio"
                        type="radio"
                        className="w-4 h-4 border border-gray-300 rounded-full checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="yescheck"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="nocheck"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 border border-gray-300 rounded-full checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="nocheck"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="py-4 border-b border-gray-300">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-semibold text-dark dark:text-white"
                >
                  We’ll explain this pet’s medical and behavioral history. Please check any additional topics you’d like to discuss:
                </label>
                <div className="flex flex-col gap-2 items-start">
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="yescheck"
                        value=""
                        name="default-radio"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="yescheck"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Feeding this pet
                    </label>
                  </div>
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="nocheck"
                        type="checkbox"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="nocheck"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Puppy/kitten-proofing your household
                    </label>
                  </div>
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="nocheck"
                        type="checkbox"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="nocheck"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Working with a trainer
                    </label>
                  </div>
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="nocheck"
                        type="checkbox"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="nocheck"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Finding a vetinary
                    </label>
                  </div>
                </div>
              </div>
              <div className="py-4 border-b border-gray-300">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-semibold text-dark dark:text-white"
                >
                  How did you hear about Furry Friends?
                </label>
                <div className="flex flex-col gap-2 items-start">
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="yescheck"
                        value=""
                        name="default-radio"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="yescheck"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      From a friend
                    </label>
                  </div>
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="nocheck"
                        type="checkbox"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="nocheck"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Social media AD
                    </label>
                  </div>
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="nocheck"
                        type="checkbox"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="nocheck"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Google search
                    </label>
                  </div>
                </div>
              </div>
              <div className="py-4 border-b border-gray-300">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-semibold text-dark dark:text-white"
                >
                  Do you have any other information you’d like to share or questions you may have
                </label>
                <input
                  type="textarea"
                  id="firstname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-secondary focus:border-secondarydeep block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondarydeep"
                  placeholder="Your address"
                  required
                />
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
