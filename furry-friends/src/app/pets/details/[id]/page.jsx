"use client";
import { merriweather } from "@/app/fonts";
import { ArrowRight2 } from "iconsax-react";
import AdoptionFormModal from "@/app/components/modals/AdoptionForm";
import { useState, useEffect } from "react";
import BookingConfirmedModal from "@/app/components/modals/BookingConfirmed";
import withNavBar from "@/app/components/HOC/withNavBar";
import { getCatDetails, getDogDetails } from "@/lib/api";
import Image from "next/image";
import isAuthenticated from "@/lib/isAuthenticated";
import { useRouter } from "next/navigation";

function Page({ params }) {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const [data, setData] = useState();
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const handleFormSubmit = () => {
    setSuccessModalOpen(true);
  };

  const handleModalOpen = () => {
    if(!isAuthenticated()) {
      return router.push("/signin");
    }
    setOpenModal(true);
  }

  useEffect(() => {
    getCatDetails(params.id).then((data) => {
      setData(data);
    });
  }, [params.id]);

  return (
    <>
      <section className="mx-4 lg:mx-16 my-16 flex flex-col lg:justify-between lg:flex-row gap-4 lg:gap-8 text-dark font-semibold">
        <div className="flex-grow">
          <Image
            className="rounded-xl"
            width={1000}
            height={1000}
            src={data?.url}
            alt="pet"
          />
        </div>
        <div className="flex-grow flex flex-col gap-6 w-full">
          <div
            className={`${merriweather.className} text-2xl text-dark flex justify-between`}
          >
            <p>{data?.breeds[0].name}</p>
            <p className="">$ 250.00</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2 py-1 border-b border-greybase">
              <p className="text-sm text-greybase">Origin</p>
              <p>{data?.breeds[0].origin}</p>
            </div>
            <div className="flex items-center justify-between gap-2 py-1 border-b border-greybase">
              <p className="text-sm text-greybase">Gender</p>
              <p>Male</p>
            </div>
            <div className="flex items-center justify-between gap-2 py-1 border-b border-greybase">
              <p className="text-sm text-greybase">Weight</p>
              <p>{data?.breeds[0].weight.imperial} kg</p>
            </div>
            <div className="flex items-center justify-between gap-2 py-1 border-b border-greybase">
              <p className="text-sm text-greybase">Life span</p>
              <p>{data?.breeds[0].life_span} yrs</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-xl p-4 bg-secondarypale border border-secondary">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>Hi there, I'm a/an {data?.breeds[0].name}</p>
            <p className="font-normal text-sm">
              {/* I'm a playful Beagle puppy with a nose for adventure and a heart
              full of love. I love sniffing around, playing fetch, and cuddling
              up for naps. My floppy ears and wagging tail are ready to bring
              endless joy to your home. Are you ready for a lifetime of fun and
              snuggles? */}
              {data?.breeds[0].description}
            </p>
            <button
              type="button"
              className="text-white bg-bluebase flex flex-row items-center justify-between gap-4 font-medium rounded-full text-sm px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_#000000] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleModalOpen}
            >
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              I'm the one!{" "}
              <ArrowRight2 size="16" color="#ffffff" variant="Outline" />
            </button>
          </div>
        </div>
      </section>
      <AdoptionFormModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onFormSubmit={handleFormSubmit}
      />
      <BookingConfirmedModal
        isOpen={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
      />
    </>
  );
}

export default withNavBar(Page);
