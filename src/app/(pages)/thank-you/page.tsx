import React from "react";

const ThankYouPage = () => {
  return (
    <>
      <section className="bg-cover bg-top bg-[url('https://res.cloudinary.com/dmaestro/image/upload/co_rgb:000,e_colorize:75/w_1920,h_600,g_south,c_fill/v1704409263/pen_jlqyen.jpg')]">
        <div className="container h-72 text-white flex items-center">
          <h2 className="text-5xl">
            Order <span className="text-[#FC5500]">submitted</span>
          </h2>
        </div>
      </section>
      <section className="py-16 min-h-[400px]">
        <div className="container max-w-4xl">
          <p className="max-w-2xl text-center mx-auto mb-8">
            Order received. Thank you.
          </p>
        </div>
      </section>
    </>
  );
};

export default ThankYouPage;
