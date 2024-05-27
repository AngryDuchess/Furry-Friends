"use client";
import { Card, Dropdown } from "flowbite-react";
import Image from "next/image";
import NavBar from "./core/NavBar";
import { SearchNormal1 } from "iconsax-react";

export default function PetCard() {
  return (
    <>
      <Card
        className="max-w-[316px] border-none gap-2"
        renderImage={() => (
          <Image
          className="rounded-xl"
            width={500}
            height={500}
            src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1715422407/samples/animals/three-dogs.jpg"
            alt="image 1"
          />
        )}
      >
        <p className="font-bold text-dark  dark:text-gray-400">
          Beagle puppy
        </p>
      </Card>
    </>
  );
}
