/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <section className="bg-green-700 py-8">
      <div className="grid md:grid-cols-[3fr_1fr] container items-center gap-16">
        <div className="flex flex-col md:flex-row md:h-[150px] items-center overflow-auto gap-2 md:gap-8">
          <img
            src="https://res.cloudinary.com/dmaestro/image/upload/v1703846071/tsa_xzxqbx.png"
            alt=""
            className="h-[50px] md:h-[70px]"
          />
          <img
            src="https://res.cloudinary.com/dmaestro/image/upload/co_rgb:fff,e_colorize:100/v1703845301/hipaa_qgn442.png"
            alt=""
            className="h-[80px] md:h-[120px]"
          />
          <img
            src="https://res.cloudinary.com/dmaestro/image/upload/co_rgb:fff,e_colorize:100/v1703846224/clda_ev3t6h.png"
            alt=""
            className="h-[50px] md:h-[70px]"
          />
        </div>
        <div className="text-white -md:text-center">
          <p>
            21240 Ashburn Crossing Drive,
            <br /> Suite 165,
            <br />
            Ashburn, VA 20147
            <br />
            Phone number +1 508-579-3655
            <br />
          </p>
          <div className="mt-4 flex gap-4 -md:justify-center">
            <a href="#">
              <FaFacebookSquare className="h-6 w-6" />
            </a>
            <a href="#">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-6 w-6" />
            </a>
            <a href="#">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
