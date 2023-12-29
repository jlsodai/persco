/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-l from-red-500 to-red-800">
      <div className="container grid md:grid-cols-2 h-full items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-white text-4xl md:text-4xl lg:text-6xl font-bold lg:pr-24 leading-tight -md:mt-16">
            Your Excellent Partner in Health Delivery
          </h3>
          <Button
            variant="outline"
            className="text-white px-12 mt-6 rounded hover:bg-white"
          >
            DRIVERS
          </Button>
        </div>
        <img
          src="https://res.cloudinary.com/dmaestro/image/upload/v1703839005/pdelivery_ctu1t9.png"
          className="shrink-0 pt-8 lg:pt-24"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
