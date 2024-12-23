import AboutFeatureCard from "../reuseableComponents/AboutFeatureCard";

const AboutBrand = () => {
  return (
    <div className="relative lg:w-[1300px] lg:h-[335px] top-[25rem] lg:top-[25rem] md:top-[45rem] md:w-[880px] w-[390px] h-[757px] bg-white flex flex-col gap-[2rem] md:px-[3rem] lg:p-0 md:mx-auto lg:mx-5 lg:justify-center lg:items-center">
      <h4 className="px-8 font-clash text-2xl font-normal leading-[28px] md:text-3xl">
        What makes our brand different
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[5rem] md:gap-[1rem] md:gap-y-[6rem] lg:gap-[5rem]">
        <AboutFeatureCard
          image="Delivery"
          heading="Next day as standard"
          para="Order before 3pm and get your order the next day as standard"
        />

        <AboutFeatureCard
          image="Checkmark"
          heading="Made by true artisans"
          para="Handmade crafted goods made with real passion and craftmanship"
        />

        <AboutFeatureCard
          image="Purchase"
          heading="Unbeatable prices"
          para="For our materials and quality you won't find better prices anywhere"
        />

        <AboutFeatureCard
          image="Sprout"
          heading="Recycled packaging"
          para="We use 100% recycled packaging to ensure our footprint is manageable"
        />
      </div>
    </div>
  );
};

export default AboutBrand;
