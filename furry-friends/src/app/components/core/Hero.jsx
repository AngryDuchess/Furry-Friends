import { merriweather } from "@/app/fonts";
import { ArrowRight2 } from "iconsax-react";


export default function Hero() {
  return (
    <>
      <header
        className="px-4 hero-pattern w-full hero-bg text-dark"
        style={{
          backgroundColor: "#FFCDD2",
          backgroundImage:
            "url('https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716221277/paws-bg_nkyk44.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:flex flex-row justify-between md:ms-16">
          <div className="mb-20 ">
            <p
              className={`text-[40px] pt-14 md:pt-24 font-bold leading-none md:text-6xl ${merriweather.className}`}
            >
              WELCOME TO
            </p>
            <br />
            <p className="text-stroke text-[40px] font-extrabold leading-none md:text-6xl">
              FUrrY FrIENDS
            </p>
            <p className="text-xl font-bold leading-8 my-6">
              Your New Best Friend Awaits!
            </p>
            <button
              type="button"
              style={{ backgroundColor: "var(--accent-100)" }}
              className="text-white flex flex-row items-center gap-4  hover: font-medium rounded-full text-sm px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_#000000] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Fetch your new friend{" "}
              <ArrowRight2 size="16" color="#ffffff" variant="Outline" />
            </button>
          </div>
          <img
            className="md:h-[600px]"
            src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716221190/person-creating-online-content-with-their-pets-removebg_1_pw0x9h.png"
          ></img>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat non
          reprehenderit repudiandae ullam delectus error, ducimus neque quos ut
          exercitationem quaerat a expedita soluta tenetur perferendis est iusto
          commodi iste? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat non reprehenderit repudiandae ullam delectus error, ducimus
          neque quos ut exercitationem quaerat a expedita soluta tenetur
          perferendis est iusto commodi iste? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat non reprehenderit repudiandae
          ullam delectus error, ducimus neque quos ut exercitationem quaerat a
          expedita soluta tenetur perferendis est iusto commodi iste? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugiat non
          reprehenderit repudiandae ullam delectus error, ducimus neque quos ut
          exercitationem quaerat a expedita soluta tenetur perferendis est iusto
          commodi iste? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat non reprehenderit repudiandae ullam delectus error, ducimus
          neque quos ut exercitationem quaerat a expedita soluta tenetur
          perferendis est iusto commodi iste? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat non reprehenderit repudiandae
          ullam delectus error, ducimus neque quos ut exercitationem quaerat a
          expedita soluta tenetur perferendis est iusto commodi iste? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugiat non
          reprehenderit repudiandae ullam delectus error, ducimus neque quos ut
          exercitationem quaerat a expedita soluta tenetur perferendis est iusto
          commodi iste? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat non reprehenderit repudiandae ullam delectus error, ducimus
          neque quos ut exercitationem quaerat a expedita soluta tenetur
          perferendis est iusto commodi iste? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat non reprehenderit repudiandae
          ullam delectus error, ducimus neque quos ut exercitationem quaerat a
          expedita soluta tenetur perferendis est iusto commodi iste? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugiat non
          reprehenderit repudiandae ullam delectus error, ducimus neque quos ut
          exercitationem quaerat a expedita soluta tenetur perferendis est iusto
          commodi iste? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat non reprehenderit repudiandae ullam delectus error, ducimus
          neque quos ut exercitationem quaerat a expedita soluta tenetur
          perferendis est iusto commodi iste? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat non reprehenderit repudiandae
          ullam delectus error, ducimus neque quos ut exercitationem quaerat a
          expedita soluta tenetur perferendis est iusto commodi iste? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugiat non
          reprehenderit repudiandae ullam delectus error, ducimus neque quos ut
          exercitationem quaerat a expedita soluta tenetur perferendis est iusto
          commodi iste? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat non reprehenderit repudiandae ullam delectus error, ducimus
          neque quos ut exercitationem quaerat a expedita soluta tenetur
          perferendis est iusto commodi iste?
        </p>
      </header>
    </>
  );
}
