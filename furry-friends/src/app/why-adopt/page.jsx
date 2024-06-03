"use client";
import { merriweather } from "../fonts";
import withNavBar from "../components/HOC/withNavBar";
import Image from "next/image";

function Page() {
  return (
    <>
      <section className=" mx-4 mt-16 lg:mx-16 text-dark flex flex-col justify-center items-center gap-5 lg:gap-8">
        <div className="flex flex-col gap-3 lg:gap-4">
          <p className="text-accent font-bold text-sm lg:text-lg">Why Adopt?</p>
          <p className={`${merriweather.className} leading-10 text-3xl lg:text-5xl`}>
            Ready to add a dose of <span className="text-accent">paw-sitivity</span> to your
            life?
          </p>
        </div>
        <Image
            width={1000}
            height={1000}
            alt={'woman washing dog'}
          className="rounded-3xl"
          src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716688770/smiley-woman-washing-dog-full-shot_2_3_yz7anj.png"
        />
        <hr />
        <article className="flex flex-col gap-3 lg:w-3/4 mx-auto">
          <p>
            {" "}
            Here&apos;s why adopting a pet from Furry Friends is the cat&apos;s
            meow (and the dog&apos;s bark):
          </p>
          <ol className="mx-4 flex flex-col gap-4 list-decimal ">
            <li className="font-semibold">
              Unconditional Love and Companionship
              <p className="font-normal">
                When you adopt a pet, you&apos;re not just getting a furry
                friend; you&apos;re gaining a loyal companion who will always be
                there to greet you with wagging tails or soothing purrs. Pets
                offer unwavering love and can instantly brighten your day, no
                matter how ruff it&apos;s been.
              </p>
            </li>
            <li className="font-semibold">
              Saving Lives
              <p className="font-normal">
                By adopting, you&apos;re giving a homeless pet a second chance
                at happiness. Each adoption helps reduce the number of animals
                in shelters and opens up space for others in need. Be a hero and
                make a real difference in the life of a deserving animal.
              </p>
            </li>
            <li className="font-semibold">
              Health Benefits
              <p className="font-normal">
                Did you know that having a pet can improve your health? Pets can
                reduce stress, lower blood pressure, and increase physical
                activity. Plus, those daily walks and playtime sessions are a
                great way to keep both you and your furry friend in shape
              </p>
            </li>
            <li className="font-semibold">
              Perfect Match
              <p className="font-normal">
                At Furry Friends, we&apos;re committed to finding the perfect
                match for you. Whether you&apos;re a couch potato looking for a
                snuggle buddy or an adventurer seeking a hiking partner, we have
                pets with diverse personalities to fit every lifestyle.
              </p>
            </li>
            <li className="font-semibold">
              Support and Community
              <p className="font-normal">
                When you adopt from Furry Friends, you&apos;re not just getting
                a pet; you&apos;re joining a community of passionate pet lovers.
                Our team is here to support you with tips, resources, and advice
                to ensure a smooth transition for your new family member.
              </p>
            </li>
            <li className="font-semibold">
              Reduce Pet Overpopulation
              <p className="font-normal">
                Adopting helps combat the issue of pet overpopulation. By
                choosing to adopt, you&apos;re contributing to the solution and
                helping to ensure that every pet finds a loving home.
              </p>
            </li>
            <li className="font-semibold">
              Feel-Good Factor
              <p className="font-normal">
                There&apos;s nothing quite like the feeling of knowing you&apos;ve made a
                positive impact. Adopting a pet brings immense joy and
                satisfaction, knowing you&apos;ve changed an animal&apos;s life for the
                better. So, what are you waiting for? Unleash happiness in your
                home by adopting a furry friend today! Click the button below
                and start your journey to find the perfect pet pal who&apos;s ready
                to shower you with love and joy.
              </p>
            </li>
          </ol>
          <div className="flex justify-center items-baseline">
          <p className="text-2xl text-center text-accent font-bold">THE END!</p>
          <Image width={200} height={200} alt={'dog with tongue out'} className=" w-auto h-12" src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1717159639/dog-tongue-out_wbvyf7.gif" />
          </div>
        </article>
      </section>
    </>
  );
}

export default withNavBar(Page);
