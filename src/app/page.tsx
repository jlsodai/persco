/* eslint-disable @next/next/no-img-element */
import Navigation from "@/components/Navigation";
import HeroSection from "@/sections/HeroSection";

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
      <section className="bg-green-700 py-8">
        <div className="grid grid-cols-[3fr_1fr] container items-center">
          <div className="flex h-[150px] items-center overflow-auto gap-8">
            <img
              src="https://res.cloudinary.com/dmaestro/image/upload/v1703846071/tsa_xzxqbx.png"
              alt=""
              className="h-[70px]"
            />
            <img
              src="https://res.cloudinary.com/dmaestro/image/upload/co_rgb:fff,e_colorize:100/v1703845301/hipaa_qgn442.png"
              alt=""
              className="h-[120px]"
            />
            <img
              src="https://res.cloudinary.com/dmaestro/image/upload/co_rgb:fff,e_colorize:100/v1703846224/clda_ev3t6h.png"
              alt=""
              className="h-[70px]"
            />
          </div>
          <p className="text-white">
            21240 Ashburn Crossing Drive,
            <br /> Suite 165,
            <br />
            Ashburn, VA 20147
            <br />
            Phone number +1 508-579-3655
            <br />
          </p>
        </div>
      </section>
    </>
  );
}
