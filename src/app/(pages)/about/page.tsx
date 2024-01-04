/* eslint-disable @next/next/no-img-element */
import PageTitle from "@/components/PageTitle";
import FooterSection from "@/sections/FooterSection";
import React from "react";

const AboutPage = () => {
  return (
    <>
      {/* <PageTitle title="About Us" /> */}
      <section className="bg-cover bg-[url('https://res.cloudinary.com/dmaestro/image/upload/v1704405060/about_dlryiw.jpg')]">
        <div className="container h-72 text-white flex items-center">
          <h2 className="text-5xl">
            About <span className="text-[#FC5500]">Us</span>
          </h2>
        </div>
      </section>
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="prose">
            <h2>Company Profile</h2>

            <p className="mt-8">
              Persco Enterprise is a regional transportation service provider
              located in Central Massachusetts - Worcester serving from small to
              large businesses with its main focus on the healthcare industry.
              PE is a well known player in the pharmaceutical and IVF industry
              serving some of the top 5 companies in the industry.
            </p>
            <p className="mt-4">
              We pride ourselves for providing excellent same day delivery and
              customized logistic solutions to our customers to satisfy all
              their courier needs. Our sole goal is your BUSINESS SUCCESS. We
              handle all your logistic needs with integrity in a timely and
              professional manner through our highly sieved professional
              contractors.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dmaestro/image/upload/v1703859086/delivery_jr3ou9.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
