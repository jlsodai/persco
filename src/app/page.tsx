/* eslint-disable @next/next/no-img-element */
import Navigation from "@/components/Navigation";
import FooterSection from "@/sections/FooterSection";
import HeroSection from "@/sections/HeroSection";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="flex flex-col">
        <Navigation />
        <HeroSection />
      </section>
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="prose">
            <h2>Who we are</h2>
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
          <div className="bg-gray-300 h-[400px] rounded-md"></div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2>Who we serve</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-16 mt-8">
            {[...Array(3)].map((e, i) => (
              <div className="bg-gray-300 h-[200px] rounded-md" key={i}></div>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
