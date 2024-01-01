/* eslint-disable @next/next/no-img-element */
import PageTitle from "@/components/PageTitle";
import WhoWeServe from "@/sections/WhoWeServe";
import { HiCheckCircle } from "react-icons/hi";
import {
  Ri24HoursLine,
  RiEBike2Line,
  RiShieldCheckFill,
  RiComputerLine,
  RiStethoscopeFill,
} from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";

import { FaUserAlt } from "react-icons/fa";

const choices = [
  {
    title: "24 Hour Professional Customer Service Team",
    icon: (
      <Ri24HoursLine className="absolute left-1 top-1 h-5 w-5 text-tender" />
    ),
    description:
      "PE customer service team is made up of a strong team of professionals in the healthcare industry with over a decade experience in pharmaceutical logistic management.",
  },
  {
    title: "Client Specific Approach",
    icon: <FaUserAlt className="absolute left-1 top-1 h-5 w-5 text-tender" />,
    description:
      "We treat each client different based on their needs and provide a niche service to suit those needs rather than a generic approach.",
  },
  {
    title: "HIPAA Compliant",
    icon: (
      <RiShieldCheckFill className="absolute left-1 top-1 h-5 w-5 text-tender" />
    ),
    description:
      "Our use of technology gives our clients real time delivery confirmation through electronic scans and signatures.",
  },
  {
    title: "Highly Professional Independent Contractors",
    icon: (
      <RiEBike2Line className="absolute left-1 top-1 h-5 w-5 text-tender" />
    ),
    description:
      "We belief that our contractors are the face of our clients and thus their professionalism in handling our clients deliveries can impact their business greatly. We therefore have a strict contracting process ranging from CORI Check to Drug Testing. Hence, our clients are assured that their deliveries are being handled by professional contractors.",
  },
  {
    title: "Competitive and Flexible Pricing",
    icon: (
      <TbTargetArrow className="absolute left-1 top-1 h-5 w-5 text-tender" />
    ),
    description:
      "We belief that our contractors are the face of our clients and thus their professionalism in handling our clients deliveries can impact their business greatly. We therefore have a strict contracting process ranging from CORI Check to Drug Testing. Hence, our clients are assured that their deliveries are being handled by professional contractors.",
  },
  {
    title: "Technology",
    icon: (
      <RiComputerLine className="absolute left-1 top-1 h-5 w-5 text-tender" />
    ),
    description:
      "We belief that our contractors are the face of our clients and thus their professionalism in handling our clients deliveries can impact their business greatly. We therefore have a strict contracting process ranging from CORI Check to Drug Testing. Hence, our clients are assured that their deliveries are being handled by professional contractors.",
  },
  {
    title: "Healthcare Oriented",
    icon: (
      <RiStethoscopeFill className="absolute left-1 top-1 h-5 w-5 text-tender" />
    ),
    description:
      "We differentiate ourselves from other couriers by focusing mainly on the healthcare industry. This has enabled us to provide excellent logistic solu- tions due to the enormous experience we have at- tained over the years by concentrating on the industry.",
  },
];

const ServiceSection = () => {
  return (
    <>
      <PageTitle title="Our Services" />
      <section className="py-16">
        <div className="container">
          <h2>Who we serve</h2>
          <WhoWeServe />
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="container py-16">
          <h2>Why choose us</h2>
          <div className="grid md:grid-cols-3 gap-x-16 gap-y-12 items-start mt-8">
            {choices.map((choice, i) => (
              <dl
                key={i}
                className="max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
              >
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    {choice.icon || (
                      <HiCheckCircle className="absolute left-1 top-1 h-5 w-5 text-tender" />
                    )}
                    {choice.title}
                  </dt>
                  <dd className="mt-2">{choice.description}</dd>
                </div>
              </dl>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
