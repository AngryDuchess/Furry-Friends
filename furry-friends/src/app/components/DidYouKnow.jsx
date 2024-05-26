import { merriweather } from "../fonts";

export default function DidYouKnow() {
  return (
    <>
      <section
        className="bg-brown flex flex-col gap-4 md:flex-row text-dark px-4 bg-blend-overlay py-12"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716724548/question-marks_sauaie.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="md:w-1/4 p-4 flex flex-col gap-3 border border-secondarydeepest bg-secondarypalest"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716726033/noise_gttper.png')",
              backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex gap-3 items-center leading-5">
            <img
              className="w-[28px] h-[28px]"
              src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716726439/light-bulb_ok00cz.svg"
            />
            <div className={`${merriweather.className} font-bold`}>
              Did your <span className="text-light">know?</span>
            </div>
          </div>
            <div>
              <p className="font-semibold">Cats have a "third eyelid"?</p>
              <p>
                Yep, it's called the nictitating membrane, a thin, whitish-pink
                layer that slides across their eye like a ninja shield. It keeps
                their eyes clean and moist
              </p>
            </div>
        </div>
        <video autoPlay src="https://res.cloudinary.com/dn5ks1ljf/video/upload/v1716727483/cat-with-glasses_oehan5.mp4" >

        </video>
      </section>
    </>
  );
}
