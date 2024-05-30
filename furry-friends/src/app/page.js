"use client"
import Hero from "@/app/components/Hero";
import NavBar from "./components/core/NavBar";
import HowItWorks from "./components/HowItWorks";
import WhyAdopt from "./components/WhyAdopt";
import DidYouKnow from "./components/DidYouKnow";
import PawsomeTips from "./components/PawsomeTips";
import Footer from "./components/core/Footer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import isAuthenticated from "@/lib/isAuthenticated";
import withNavBar from "./components/HOC/withNavBar";


function Home() {
  const router = useRouter();
  useEffect (() => {
    if (!isAuthenticated()) {
      router.push('/')
    } 
  }, [])

  return (
    <>
        {/* <NavBar /> */}
        <Hero />
        <HowItWorks />
        <WhyAdopt />
        <DidYouKnow />
        <PawsomeTips />
        <Footer />
    </>
  )
}

export default withNavBar(Home);
