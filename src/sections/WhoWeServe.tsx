const clients = [
  {
    title: "Independent Labs",
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/v1703856498/pharmacist_edmrvp.jpg",
  },
  {
    title: "Hospital Systems and Groups",
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/v1703857029/hospital_h15i9r.jpg",
  },
  {
    title: "Long term care patients",
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/v1703857776/longterm_lggex5.jpg",
  },
];

const WhoWeServe = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 md:gap-16 mt-8">
        {clients.map((client, i) => (
          <div
            className="bg-cover relative h-[250px] rounded-md flex"
            key={i}
            style={{
              background: `url('${client.imgUrl}') no-repeat center center / cover`,
            }}
          >
            <h2 className="absolute bg-black/30 flex text-white items-center justify-center px-16 text-center w-full h-full">
              {client.title}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhoWeServe;
