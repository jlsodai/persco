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
      <section className="py-16">
        <div className="container">
          <h2>Who we serve</h2>
          <WhoWeServe />
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container grid md:grid-cols-2 gap-8 md:16 items-center">
          <div className="md:pr-20">
            <h2>Who we are</h2>
            <p className="mt-8">
              Welcome to Persco Enterprise, your trusted partner in
              transportation and logistics based in Central Massachusetts -
              Worcester. As a regional service provider, we take pride in
              serving businesses of all sizes, with a primary focus on the
              healthcare industry. At Persco, we stand out in the pharmaceutical
              and IVF sectors, proudly collaborating with some of the top
              companies in these fields.
            </p>
            <p className="mt-4">
              Our commitment is to provide you with excellent same-day delivery
              and customized logistic solutions to meet all your courier needs.
              Your business success is our sole goal, and we achieve this by
              handling your logistics with integrity, professionalism, and the
              expertise of our highly vetted professional contractors.
            </p>
            <p className="mt-4">
              Explore the seamless and reliable transportation services at
              Persco Enterprise, where your satisfaction is our priority.
              Welcome aboard!
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dmaestro/image/upload/v1703859086/delivery_jr3ou9.png"
            alt=""
          />
        </div>
      </section>
      <FooterSection />
    </>
  );
}
