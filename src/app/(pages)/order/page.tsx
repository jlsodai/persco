import PageTitle from "@/components/PageTitle";
import FormInput from "@/components/ui/forms/FormInput";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { Resend } from "resend";

async function send(formData: FormData) {
  "use server";

  const pickup_location = formData.get("pickup_location");
  const delivery_location = formData.get("delivery_location");
  const delivery_date = formData.get("delivery_date");
  const pickup_time = formData.get("pickup_time");
  const fullname = formData.get("fullname");
  const service = formData.get("service");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const comment = formData.get("comment");
  // console.log("Hello World");
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "michael@pdeliveryrx.com",
    to: "jlsodai@gmail.com",
    subject: "Order successful",
    html: `
    <p>Dear ${fullname},</p>
    <p>Thanks for the request the driver will be at the pharmacy at the time requested.</p>
    <p>Kind regards, <br/>Persco Delivery</p>
    `,
  });

  await resend.emails.send({
    from: "michael@pdeliveryrx.com",
    to: "perscodelivery@gmail.com",
    subject: "Order submission",
    html: `
      <p>Pickup location: ${pickup_location}</p>
      <p>Delivery location: ${delivery_location}</p>
      <p>Delivery date: ${delivery_date}</p>
      <p>Pickup time: ${pickup_time}</p>
      <p>Fullname: ${fullname}</p>
      <p>Service: ${service}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Comment: ${comment}</p>
    `,
  });

  redirect("/thank-you");
}
const services = [
  "Longterm care hospital systems",
  "Home infusions",
  "Independent lab",
  "Same Day Delivery",
  "Dedicated Route Service",
  "On-Demand service",
  "Route Optimization Tools",
];
const vehicles = ["Car", "SUV", "Cargo Van", "Box Truck", "Other"];
const OrderPage = async () => {
  return (
    <>
      {/* <PageTitle title="Request for quote" /> */}
      <section className="bg-cover bg-top bg-[url('https://res.cloudinary.com/dmaestro/image/upload/co_rgb:000,e_colorize:75/w_1920,h_600,g_south,c_fill/v1704409263/pen_jlqyen.jpg')]">
        <div className="container h-72 text-white flex items-center">
          <h2 className="text-5xl">
            Place <span className="text-[#FC5500]">an Order</span>
          </h2>
        </div>
      </section>
      <section className="py-16">
        <div className="container max-w-4xl">
          <p className="max-w-2xl text-center mx-auto mb-8">
            Please fill out all of the information below and we will contact you
            shortly.
          </p>
          <form
            action={send}
            className="space-y-8"
            // name="order"
            // data-netlify="true"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <FormInput
                label="Pickup Location"
                placeholder="Enter Pickup Location"
                name="pickup_location"
                required={true}
              />
              <FormInput
                label="Delivery Location"
                placeholder="Enter Delivery Location"
                name="delivery_location"
                required={true}
              />
              <FormInput
                type="date"
                label="Delivery date"
                name="delivery_date"
                required={true}
              />
              <FormInput
                type="time"
                label="Time ready for pickup"
                name="pickup_time"
                required={false}
              />
              <FormInput
                label="Name"
                placeholder="Enter Full Name"
                name="fullname"
                required={true}
              />
              <FormInput
                eltype="select"
                options={services}
                label="Service"
                placeholder="Select a service"
                name="service"
                required={true}
              />
              <FormInput
                label="Email address"
                placeholder="Enter email address"
                name="email"
                required={true}
                type="email"
              />
              <FormInput
                label="Phone number"
                placeholder="Enter phone number"
                name="phone"
                required={true}
              />
            </div>
            <FormInput
              label="Comments"
              placeholder="Enter comment"
              name="comment"
              required={true}
              eltype="textarea"
            />

            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#00A600] sm:w-fit hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default OrderPage;
