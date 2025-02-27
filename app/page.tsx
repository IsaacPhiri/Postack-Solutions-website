import React from "react";
import Navbar from "@/components/navbar/page";
import Hero from "@/components/hero/page";
import DevelopmentServices from "@/components/development-services/page";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DevelopmentServices />
      <Footer />
    </>
  );
}
