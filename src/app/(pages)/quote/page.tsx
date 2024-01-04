import PageTitle from "@/components/PageTitle";
import FormInput from "@/components/ui/forms/FormInput";

const industries = [
  "Healthcare",
  "Biotech / Pharmaceutical",
  "Specialty Testing",
  "Veterinary Laboratory",
];
const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
const QuotePage = () => {
  return (
    <>
      {/* <PageTitle title="Request for quote" /> */}
      <section className="bg-cover bg-[url('https://res.cloudinary.com/dmaestro/image/upload/v1704405058/cont_egf9rq.jpg')]">
        <div className="container h-72 text-white flex items-center">
          <h2 className="text-5xl">
            Request <span className="text-[#FC5500]">for Quote</span>
          </h2>
        </div>
      </section>
      <section className="py-16">
        <div className="container max-w-4xl">
          <p className="max-w-2xl text-center mx-auto mb-8">
            Please fill out the contact form below and we will promptly reach
            out with more information on how to get started.
          </p>
          <form
            action="#"
            className="space-y-8"
            name="quote"
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
              <FormInput
                label="City"
                placeholder="Enter city"
                name="city"
                required={true}
              />
              <FormInput
                eltype="select"
                options={states}
                label="State"
                placeholder="Select a state"
                name="state"
                required={true}
              />
            </div>
            <FormInput
              label="Message"
              placeholder="Enter message"
              name="message"
              required={true}
              eltype="textarea"
            />
            <div className="grid md:grid-cols-2 max-w-md">
              <FormInput
                eltype="radio"
                options={industries}
                label="What is your industry"
                name="industry"
                required={true}
              />
            </div>
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

export default QuotePage;
