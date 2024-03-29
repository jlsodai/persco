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
import { CiRoute, CiDeliveryTruck, CiMobile3, CiMap } from "react-icons/ci";

import { FaUserAlt } from "react-icons/fa";

const colors = [
  "bg-indigo-50",
  "bg-amber-50",
  "bg-stone-50",
  "bg-green-50",
  "bg-red-50",
  "bg-yellow-50",
  "bg-purple-50",
];
const textColors = [
  "text-indigo-800",
  "text-amber-800",
  "text-stone-800",
  "text-green-800",
  "text-red-800",
  "text-yellow-800",
  "text-purple-800",
];
const services = [
  {
    title: "Longterm care hospital systems",
    icon: <CiDeliveryTruck className="h-32 w-32 text-indigo-800" />,
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/co_rgb:000,e_colorize:20/v1703856498/pharmacist_edmrvp.jpg",
    desc: "Our Same Day Delivery service – the epitome of convenience and efficiency. In today's fast-paced world, we understand the importance of instant gratification, and our Same Day Delivery service is designed to meet your urgent needs.",
  },
  {
    title: "Home infusions",
    icon: <CiDeliveryTruck className="h-32 w-32 text-amber-800" />,
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/co_rgb:000,e_colorize:20/v1703856498/pharmacist_edmrvp.jpg",
    desc: "Our Same Day Delivery service – the epitome of convenience and efficiency. In today's fast-paced world, we understand the importance of instant gratification, and our Same Day Delivery service is designed to meet your urgent needs.",
  },
  {
    title: "Independent lab",
    icon: <CiDeliveryTruck className="h-32 w-32 text-stone-800" />,
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/co_rgb:000,e_colorize:20/v1703856498/pharmacist_edmrvp.jpg",
    desc: "Our Same Day Delivery service – the epitome of convenience and efficiency. In today's fast-paced world, we understand the importance of instant gratification, and our Same Day Delivery service is designed to meet your urgent needs.",
  },
  {
    title: "Same Day Delivery",
    icon: <CiDeliveryTruck className="h-32 w-32 text-green-800" />,
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/co_rgb:000,e_colorize:20/v1703856498/pharmacist_edmrvp.jpg",
    desc: "Our Same Day Delivery service – the epitome of convenience and efficiency. In today's fast-paced world, we understand the importance of instant gratification, and our Same Day Delivery service is designed to meet your urgent needs.",
  },
  {
    title: "Dedicated Route Service",
    icon: <CiRoute className="h-32 w-32 text-red-800" />,
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/co_rgb:000,e_colorize:20/v1703856498/pharmacist_edmrvp.jpg",
    desc: "Key features of our Dedicated Route Service include real-time tracking, allowing you to monitor the movement of your shipments at every stage. We prioritize consistency and reliability, providing a dedicated team of drivers familiar with your route to enhance the overall efficiency of the delivery process. This service is ideal for businesses with recurring delivery needs, ensuring a dependable and timely supply chain.",
  },
  {
    title: "On-Demand service",
    icon: <CiMobile3 className="h-32 w-32 text-yellow-800" />,
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/co_rgb:000,e_colorize:20/v1703856498/pharmacist_edmrvp.jpg",
    desc: "With On-Demand, you have the power to request services or products whenever you need them. Whether it's a spontaneous delivery, a quick service call, or immediate access to resources, our platform is ready to respond. We leverage advanced technology to connect you with our services promptly, ensuring that your requests are met with speed and efficiency.",
  },
  {
    title: "Route Optimization Tools",
    icon: <CiMap className="h-32 w-32 text-purple-800" />,
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/co_rgb:000,e_colorize:20/v1703856498/pharmacist_edmrvp.jpg",
    desc: "Our state-of-the-art Route Optimization Tools utilize cutting-edge algorithms to analyze variables such as traffic patterns, delivery windows, and vehicle capacities. The result is a meticulously optimized route that minimizes travel time, reduces fuel consumption, and enhances overall fleet productivity. By harnessing the power of technology, we empower businesses to streamline their logistics operations and maximize resource utilization.",
  },
];
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
      "By upholding the highest standards set by HIPAA, we guarantee the reliable and secure delivery of medical parcels while safeguarding patient privacy throughout the entire process.",
  },
  {
    title: "Highly Professional Independent Contractors",
    icon: (
      <RiEBike2Line className="absolute left-1 top-1 h-5 w-5 text-tender" />
    ),
    description:
      "Our medical delivery service is elevated by our highly professional independent contractors who contribute significantly to our commitment to excellence. Rigorously selected for their expertise and reliability, these contractors specialize in the intricacies of medical logistics.",
  },
  {
    title: "Competitive and Flexible Pricing",
    icon: (
      <TbTargetArrow className="absolute left-1 top-1 h-5 w-5 text-tender" />
    ),
    description:
      "Our competitive and flexible pricing caters to diverse client needs, striking a balance between affordability and quality. We believe in transparent models to build trust and lasting partnerships, adapting to the dynamic market and unique client requirements.",
  },
  {
    title: "Technology",
    icon: (
      <RiComputerLine className="absolute left-1 top-1 h-5 w-5 text-tender" />
    ),
    description:
      "Our advanced tracking, secure digital communication, and analytics optimize routes, ensure timely and cost-effective services. Robust encryption is a priority, particularly for medical deliveries. Staying at the forefront of technology allows us to consistently meet evolving client needs.",
  },
  {
    title: "Healthcare Oriented",
    icon: (
      <RiStethoscopeFill className="absolute left-1 top-1 h-5 w-5 text-tender" />
    ),
    description:
      "We differentiate ourselves from other couriers by focusing mainly on the healthcare industry. This has enabled us to provide excellent logistic solutions due to the enormous experience we have attained over the years by concentrating on the industry.",
  },
];

const ServiceSection = () => {
  return (
    <>
      {/* <PageTitle title="Our Services" /> */}
      <section className="bg-cover bg-[url('https://res.cloudinary.com/dmaestro/image/upload/v1704405060/serv_jb1zbc.jpg')]">
        <div className="container h-72 text-white flex items-center">
          <h2 className="text-5xl">
            Our <span className="text-[#FC5500]">Services</span>
          </h2>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <div className="grid xl:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div className={`flex flex-col gap-4 ${colors[i]} p-6`} key={i}>
                <p className={`font-extrabold text-xl ${textColors[i]}`}>
                  {service.title}
                </p>
                <div className="md:flex gap-6">
                  {/* <div
                    className="bg-cover relative h-[180px] w-full md:w-[200px] lg:h-[250px] lg:w-[250px] rounded-md shrink-0"
                    key={i}
                    style={{
                      background: `url('${service.imgUrl}') no-repeat center center / cover`,
                    }}
                  ></div> */}
                  <div className="">{service?.icon}</div>

                  <p className="text-gray-600 -md:mt-4">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="container text-center pt-16">
          <h2>How it works</h2>
          <img
            className="max-w-5xl mx-auto w-full"
            src="https://res.cloudinary.com/dmaestro/image/upload/v1704139274/howitworks_gg2yap.png"
            alt=""
          />
        </div>
      </section>
      <section>
        <div className="container py-16">
          <h2>Why choose us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 items-start mt-8">
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
