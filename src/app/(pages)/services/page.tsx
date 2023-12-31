import PageTitle from "@/components/PageTitle";
import WhoWeServe from "@/sections/WhoWeServe";

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
    </>
  );
};

export default ServiceSection;
