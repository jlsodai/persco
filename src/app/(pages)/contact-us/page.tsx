import PageTitle from "@/components/PageTitle";
import FormInput from "@/components/ui/forms/FormInput";

const ContactPage = () => {
  return (
    <>
      <PageTitle title="Contact Us" />
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center">
            <p className="max-w-2xl mx-auto mb-4">
              Please fill out the below to get in touch with us.
            </p>
            <p>
              <span className="font-bold">Phone:</span> +1 508-579-3655 <br />
              <span className="font-bold">Email: </span> info@pdeliveryrx.com
            </p>
          </div>
          <form
            action="#"
            className="space-y-8 mt-16"
            name="contact-us"
            data-netlify="true"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <FormInput
                label="First name"
                placeholder="Enter first name"
                name="firstname"
                required={true}
              />
              <FormInput
                label="Last name"
                placeholder="Enter last name"
                name="lastname"
                required={true}
              />
              <FormInput
                label="Phone number"
                placeholder="Enter phone number"
                name="phone"
                required={true}
              />
              <FormInput
                label="Email address"
                placeholder="Enter email address"
                name="email"
                required={true}
                type="email"
              />
            </div>
            <FormInput
              label="Message"
              placeholder="Enter message"
              name="message"
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

export default ContactPage;
