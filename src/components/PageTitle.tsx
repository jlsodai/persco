import React from "react";

const PageTitle = ({ title = "" }) => {
  return (
    <section className="bg-gradient-to-r from-orange-900 to-[#FC5500]">
      <div className="container h-44 h-md:56 text-white flex items-center">
        <h2 className="text-4xl md:text-5xl">{title}</h2>
      </div>
    </section>
  );
};

export default PageTitle;
