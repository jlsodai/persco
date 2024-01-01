/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-orange-900 to-[#FC5500] z-10">
      <div className="container grid md:grid-cols-2 h-full items-center gap-4">
        <div className="text-center md:text-left">
          <h3
            className="text-white text-4xl md:text-4xl lg:text-6xl font-semibold lg:pr-24 leading-tight -md:mt-16"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Your Excellent Partner in Health Delivery
          </h3>
          <a href="/contact-us" data-aos="fade-up" data-aos-delay="200">
            <Button
              variant="outline"
              className="text-white px-12 mt-6 rounded hover:bg-white"
            >
              Get in touch
            </Button>
          </a>
        </div>
        <img
          src="https://res.cloudinary.com/dmaestro/image/upload/v1703839005/pdelivery_ctu1t9.png"
          className="shrink-0 pt-8 lg:pt-24"
          data-aos="fade-left"
          data-aos-delay="800"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
