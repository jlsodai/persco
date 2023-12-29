import Navigation from "@/components/Navigation";
import React from "react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="bgover flex flex-col" id="home">
        <Navigation />
      </section>
      {children}
    </>
  );
};

export default PagesLayout;
