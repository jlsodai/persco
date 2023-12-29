import React from "react";

const PageTitle = ({ title = "" }) => {
  return (
    <section className="bg-bg-gradient-to-l from-red-500 to-red-800">
      <div className="container h-56 text-white flex items-center">
        <h2 className="text-5xl">{title}</h2>
      </div>
    </section>
  );
};

export default PageTitle;
