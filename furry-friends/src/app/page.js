import Hero from "@/app/components/Hero";
import NavBar from "./components/core/NavBar";
import HowItWorks from "./components/HowItWorks";
import WhyAdopt from "./components/WhyAdopt";
import DidYouKnow from "./components/DidYouKnow";

export default function Home() {
  return (
    <>
        <NavBar />
        <Hero />
        <HowItWorks />
        <WhyAdopt />
        <DidYouKnow />
    </>
  )
}
