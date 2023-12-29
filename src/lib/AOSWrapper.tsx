"use client";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";

const AOSWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 20,
      easing: "ease-in-sine",
    });
  }, []);
  return <>{children}</>;
};
export default AOSWrapper;
