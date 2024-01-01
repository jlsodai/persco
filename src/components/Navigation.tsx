"use client";

/* eslint-disable @next/next/no-img-element */
import { links } from "@/lib/navlinks";
import Link from "next/link";
import React, { useState } from "react";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const currentRoute = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header>
      <div className="bg-[#00A600] h-2"></div>
      <div className="container py-4 flex justify-between items-center -sm:bg-white">
        <Link href="/" className="py-2">
          <img
            src="https://res.cloudinary.com/dmaestro/image/upload/v1703843137/logo_yjvk3h.png"
            width="200px"
            alt="Logo"
          />
        </Link>
        <div className="my-3">
          <nav className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto -md:relative">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {/* mobile */}
            <div
              className={`${
                mobileMenu ? "" : "hidden"
              } z-50 w-full md:block md:w-auto -md:absolute top-12 min-w-[200px]`}
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg -md:bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.url}
                      className={`block py-2 px-8 hover:text-[#FC5500]  ${
                        currentRoute === link.url ? "text-[#FC5500]" : ""
                      }  rounded md:p-0`}
                      aria-current="page"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/quote" className="block py-2">
                    <Button
                      variant="default"
                      className="bg-[#00A600] hover:bg-green-500 rounded text-white px-8"
                    >
                      Get Quote
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
