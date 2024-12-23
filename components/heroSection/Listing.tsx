import ProductCard from "../reuseableComponents/ProductCard";

const Listing = () => {
  return (
    <div className="relative h-[811px] mx-auto lg:mx-5 lg:h-[761px] bg-white flex flex-col gap-3 py-[3rem] mt-[17rem] lg:mt-[6rem] md:bottom-[25rem] lg:-bottom-32 md:py-0 md:px-4 px-0">
      <h4 className="font-clash font-normal leading-[24.6px] text-darkPrimary text-xl lg:text-4xl md:text-3xl lg:mb-6">
        New ceramics
      </h4>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[0.5rem] lg:gap-[2rem] md:gap-0 md:gap-y-[8rem] md:gap-x-[0rem]">
        <ProductCard
          image="Vase"
          heading="Rustic Vase Set"
          price="155"
          id="1"
        />

        <ProductCard image="lamp" heading="The Lucy Lamp" price="399" id="2" />

        <ProductCard
          image="SilkVase"
          heading="The Silky Vase"
          price="125"
          id="3"
        />

        <ProductCard
          image="BlackChair"
          heading="The Dandy chair"
          price="250"
          id="4"
        />
      </div>

      <button className="relative md:top-[9rem] lg:left-[32rem] md:left-[10rem] m-2 w-[309px] py-[16px] px-[32px] bg-lightGray bg-opacity-[15%] leading-6 text-[#2a254b] font-satoshi font-normal hover:bg-darkPrimary hover:text-white transition-all duration-300 ease-in-out text-lg">
        View collection
      </button>
    </div>
  );
};

export default Listing;
