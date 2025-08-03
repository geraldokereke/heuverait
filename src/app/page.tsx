"use client";
import BlogPreview from "@/components/insights/BlogPreview";
import { Contact } from "@/components/insights/ContactCTA";
import Hero from "@/components/insights/Hero";
import Industries from "@/components/insights/Industries";
import Navigation from "@/components/Navigation";
import Services from "@/components/insights/Services";
import { Stories } from "@/components/insights/Stories";
import Technologies from "@/components/insights/Technologies";
import WhyChooseUs from "@/components/insights/WhyChooseUs";
import React from "react";
import LogoMarquee from "@/components/insights/LogoMarquee";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <WhyChooseUs />
      <Technologies />
      <Services />
      <Industries />
      <Stories />
      <LogoMarquee />
      <BlogPreview />
      <Contact />
    </>
  );
};

export default Home;
