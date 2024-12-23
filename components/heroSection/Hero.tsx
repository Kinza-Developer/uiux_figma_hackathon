import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative mx-auto h-[502px] md:h-[584px] justify-center items-center md:my-[3rem]  bg-darkPrimary flex flex-col md:flex-row lg:gap-[2rem] md:gap-0 gap-[2rem] md:mx-auto lg:mx-[6rem]">
      <div className="lg:mb-[2rem]">
        <div className="relative lg:bottom-[5rem] px-10 md:px-6 lg:px-[3rem]">
          <h2 className="font-clash font-normal  leading-[44.8px] text-white text-3xl lg:text-4xl">
            The furniture brand for the future, with timeless designs
          </h2>
        </div>
        <div className="px-8 font-satoshi font-normal flex flex-col gap-10">
          <p className="leading-[27px] md:relative md:top-[14rem] lg:left-6 lg:w-[602px] md:w-[400px] text-white text-lg">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
          <button className="w-full md:relative md:w-[188px] lg:left-[1rem] md:bottom-[10rem] py-[16px] px-[32px] bg-[#f9f9f9] bg-opacity-[15%] leading-6 text-white font-satoshi font-normal hover:bg-lightGray hover:text-darkBlue transition-all duration-300 ease-in-out">
            View collection
          </button>
        </div>
      </div>
      <div className="relative left-[2rem]  w-[900px] h-[584px] md:block hidden ">
        <Image
          src="/images/hero.png"
          alt="Chair"
          width={200}
          height={200}
          className="w-[460px] lg:w-[520px] h-[584px]"
        />
      </div>
    </div>
  );
};

export default Hero;
