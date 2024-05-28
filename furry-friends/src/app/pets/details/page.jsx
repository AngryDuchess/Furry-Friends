"use client"
import { merriweather } from "@/app/fonts";
import { Weight, Calendar1, Man, Location, ArrowRight2 } from "iconsax-react";
import AdoptionFormModal from "@/app/components/modals/AdoptionForm";
import { useState } from "react";

export default function Page() {
  const [openModal, setOpenModal]= useState(false);
  return (
    <>
      <section className="mx-4 lg:mx-16 my-16 flex flex-col lg:flex-row gap-4 lg:gap-8 text-dark font-semibold">
        <div>
          <img
            className="rounded-xl"
            src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1715422407/samples/animals/three-dogs.jpg"
          />
        </div>
        <div className="flex flex-col gap-6 lg:max-w-sm">
          <div
            className={`${merriweather.className} text-2xl text-dark flex justify-between`}
          >
            <p>Beagle puppy</p>
            <p className="">$ 250.00</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2 py-1 border-b border-greybase">
              {/* <Location size="24" color="#ABABAB" variant="Bold"/> */}
              <p className="text-sm text-greybase">Location</p>
              <p>Accra, Ghana</p>
            </div>
            <div className="flex items-center justify-between gap-2 py-1 border-b border-greybase">
              {/* <Man size="24" color="#ABABAB" variant="Bold"/> */}
              <p className="text-sm text-greybase">Gender</p>
              <p>Male</p>
            </div>
            <div className="flex items-center justify-between gap-2 py-1 border-b border-greybase">
              {/* <Weight size="24" color="#ABABAB" variant="Bold" /> */}
              <p className="text-sm text-greybase">Weight</p>
              <p>80 Ibs</p>
            </div>
            <div className="flex items-center justify-between gap-2 py-1 border-b border-greybase">
              {/* <Calendar1 size="24" color="#ABABAB" variant="Bold"/> */}
              <p className="text-sm text-greybase">Age</p>
              <p>2 months old</p>
            </div>
          </div>
        <div className="flex flex-col items-start gap-4 rounded-xl p-4 bg-secondarypale border border-secondary">
          <p>Hi there, I'm a beagle puppy!</p>
          <p className="font-normal text-sm">
            I'm a playful Beagle puppy with a nose for adventure and a heart
            full of love. I love sniffing around, playing fetch, and cuddling up
            for naps. My floppy ears and wagging tail are ready to bring endless
            joy to your home. Are you ready for a lifetime of fun and snuggles?
          </p>
          <button
            type="button"
            className="text-white bg-bluebase flex flex-row items-center justify-between gap-4 font-medium rounded-full text-sm px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_#000000] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {setOpenModal(true)}}
          >
            {openModal && 
                (<AdoptionFormModal isOpen={openModal} onClose={() => setOpenModal(false)}/>)
                }
            I'm the one!{" "}
            <ArrowRight2 size="16" color="#ffffff" variant="Outline" />
          </button>
        </div>
        </div>
      </section>
    </>
  );
}
