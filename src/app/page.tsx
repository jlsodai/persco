/* eslint-disable @next/next/no-img-element */
import Navigation from "@/components/Navigation";
import FooterSection from "@/sections/FooterSection";
import HeroSection from "@/sections/HeroSection";
import WhoWeServe from "@/sections/WhoWeServe";

const clients = [
  {
    title: "Independent Labs",
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/v1703856498/pharmacist_edmrvp.jpg",
  },
  {
    title: "Hospital Systems and Groups",
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/v1703857029/hospital_h15i9r.jpg",
  },
  {
    title: "Long term care patients",
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/v1703857776/longterm_lggex5.jpg",
  },
];

export default function Home() {
  return (
    <>
      <section className="flex flex-col">
        <Navigation />
        <HeroSection />
      </section>
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-8 md:16 items-center">
          <div className="md:pr-20">
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
          <img
            src="https://res.cloudinary.com/dmaestro/image/upload/v1703859086/delivery_jr3ou9.png"
            alt=""
          />
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container">
          <h2>Who we serve</h2>
          <WhoWeServe />
        </div>
      </section>
      <FooterSection />
    </>
  );
}
