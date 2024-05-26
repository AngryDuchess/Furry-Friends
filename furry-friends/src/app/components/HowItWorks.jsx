import { merriweather } from "../fonts";

export default function HowItWorks() {
  return (
    <>
      <section
        className="bg-secondary bg-blend-overlay py-12 px-4 flex flex-col gap-14 md:px-16"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716588251/second-bg_fkbbeg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={`${merriweather.className} text-dark text-3xl flex gap-1.5 justify-center w-full`}>
        <p>How it</p>
        <p className="text-accent">works?</p>
        </div>
        <div className="flex flex-col gap-12 md:flex-row justify-between">
            <div className="flex flex-col justify-center gap-4 items-center max-w-[334]">
                <div className="flex items-center justify-center rounded-full bg-palegreen w-[172px] h-[172px]">
                    <img className="h-[122px]" src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716588238/cat-phone_df1sxq.svg" />
                </div>
                <div className="text-center text-dark text-sm flex flex-col gap-3">
                    <p className="font-semibold text-accent">Create an account</p>
                    <p>Sign up in a jiffy! Fill in your details<br /> and join our fur-tastic community.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center max-w-[334]">
                <div className="flex items-center justify-center rounded-full bg-accentpalest w-[172px] h-[172px]">
                    <img className="h-[122px]" src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716588239/cat-dog_kye9au.svg" />
                </div>
                <div className="text-center text-dark text-sm flex flex-col gap-3">
                    <p className="font-semibold text-accent">Find a pet</p>
                    <p>Browse our adorable pet profiles. Filter by breed,<br /> size, and more to find your perfect match.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center max-w-[334]">
                <div className="flex items-center justify-center rounded-full bg-secondarypale w-[172px] h-[172px]">
                    <img className="h-[122px]" src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716588238/boss-dog_fminzh.svg" />
                </div>
                <div className="text-center text-dark text-sm flex flex-col gap-3">
                    <p className="font-semibold text-accent">Book a Call & Receive Your Pet</p>
                    <p>Schedule a call to finalize the adoption. Then, get<br /> ready to welcome your new furry friend home!</p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}