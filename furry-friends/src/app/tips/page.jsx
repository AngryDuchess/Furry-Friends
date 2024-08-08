"use client";
import withNavBar from "../components/HOC/withNavBar";
import { merriweather } from "../fonts";
import Image from "next/image";
import { useState, useEffect } from "react";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";


function Page() {
  const [tips, setTips] = useState([]);

  const fetchBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, "tips"));
    const blogsArray = [];
    querySnapshot.forEach((blog) => {
      blogsArray.push({ id: blog.id, ...blog.data() });
      console.log(blog.id, " => ", blog.data());
    });
    setTips(blogsArray); 
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <>
      <section className=" mx-4 mt-16 lg:mx-16 text-dark flex flex-col items-center gap-5 lg:gap-8">
        <div>
          <p
            className={`${merriweather.className} leading-10 text-3xl lg:text-5xl`}
          >
            Paw-some Tips for{" "}
            <span className="text-accent">New Pet Parents</span>
          </p>
        </div>
        <Image
            width={1000}
            height={1000}
            alt={'man with pet'}
          className="rounded-3xl"
          src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716734770/FurryFriends/man-with-his-adorable-pet-cat_1_1_jb0dkp.png"
        />
        <hr />
        <article className="flex flex-col gap-3 lg:w-3/4 mx-auto">
          <p>
            {" "}
            Here are some paw-some tips to help you and your new furry friend
            settle in:
          </p>
          <ol className="mx-4 flex flex-col gap-4 list-decimal ">
            {tips && tips.map(tip => (
            <li key={tip?.id} className="font-semibold">
              {tip?.title}
              <p className="font-normal">
                {tip?.content}
              </p>
            </li>
            ))}
          </ol>
          <div className="flex justify-center items-baseline">
            <p className="text-2xl text-center text-accent font-bold">
              THE END!
            </p>
            <Image
                width={200}
                height={200}
                alt={'dog with tongue out'}
              className=" w-auto h-12"
              src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1717159639/FurryFriends/dog-tongue-out_wbvyf7.gif"
            />
          </div>
        </article>
      </section>
    </>
  );
}

export default withNavBar(Page);


{/* <li className="font-semibold">
              Pet-proof Your Belongings
              <p className="font-normal">
                Hide your shoes, stash your socks, and say goodbye to your
                favorite chewable items. Pets, especially puppies and kittens,
                love to explore with their mouths. Save yourself the heartache
                and keep precious items out of reach.
              </p>
            </li>
            <li className="font-semibold">
              Establish a Routine
              <p className="font-normal">
                Pets thrive on routine. Set regular times for feeding, walks,
                and playtime. This helps them feel secure and understand what to
                expect. Plus, it keeps you organized and ensures you don&apos;t
                forget dinner (theirs, not yours).
              </p>
            </li>
            <li className="font-semibold">
              Healthy Diet
              <p className="font-normal">
                Feed your pet a balanced diet suited to their age, size, and
                breed. Avoid giving them human food, especially chocolate,
                onions, and grapes, which are harmful to pets. Consult your vet
                for dietary recommendations &hyphen; and remember, treats in
                moderation!
              </p>
            </li>
            <li className="font-semibold">
              Regular Vet Visits
              <p className="font-normal">
                Schedule regular check-ups with your vet to keep your pet in
                tip-top shape. Vaccinations, flea and tick prevention, and
                dental care are crucial. Your vet is your best friend when it
                comes to keeping your furry pal healthy and happy.
              </p>
            </li>
            <li className="font-semibold">
              Training and Socialization
              <p className="font-normal">
                Start training your pet early with basic commands like sit,
                stay, and come. Positive reinforcement works wonders! Socialize
                them with other pets and people to ensure they grow up to be
                well-adjusted and friendly.
              </p>
            </li>
            <li className="font-semibold">
              Exercise and Playtime
              <p className="font-normal">
                Ensure your pet gets plenty of exercise and mental stimulation.
                Regular walks, play sessions, and interactive toys keep them
                physically fit and mentally sharp. A tired pet is a happy pet
                (and less likely to chew your furniture).
              </p>
            </li>
            <li className="font-semibold">
            Grooming
              <p className="font-normal">
              Regular grooming is essential for your pet&apos;s health. Brush their fur to prevent matting, trim their nails, and keep their ears clean. Some pets might not love bath time, but a clean pet is a happy pet (and a better-smelling one).
              </p>
            </li>
            <li className="font-semibold">
            Pet Insurance
              <p className="font-normal">
              Consider getting pet insurance to cover unexpected medical expenses. It&apos;s better to be safe than sorry, and it can save you from hefty vet bills in the long run.
              </p>
            </li> */}
