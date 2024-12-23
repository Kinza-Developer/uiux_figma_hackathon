import Image from "next/image";

const AboutGetInTouch = () => {
  return (
    <div className="relative w-[390px] h-[836px] lg:w-[1333px] md:w-[890px] md:mx-auto lg:mx-0 lg:h-[603px] bg-lightGray flex top-[14rem] flex-col-reverse lg:flex-row-reverse lg:top-[8rem] md:top-[30rem] md:justify-center md:items-center lg:justify-normal lg:items-start">
      <div className="flex flex-col gap-[16px] p-4 lg:w-[720px] md:w-[630px] mt-[5rem] px-8 md:px-0 lg:px-[7rem] md:mt-[1rem] lg:mt-[5rem]">
        <h4 className="font-clash text-2xl font-normal leading-[28px] text-[#2a254b] md:text-[1.5rem] md:w-[514px]">
          Our service isn&apos;t just personal, it&apos;s actually hyper
          personally exquisite
        </h4>
        <p className="font-satoshi leading-[21px] font-normal text-[#505977] text-[14px] md:w-[570px] md:text-lg md:mt-3">
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market. <br />
          <br />
          Handmade, and lovingly crafted furniture and homeware is what we live,
          breathe and design so our Chelsea boutique become the hotbed for the
          London interior design community.
        </p>
        <div className="relative flex lg:top-[3rem] lg:right-[6rem] justify-center md:-top-[6rem] md:right-[10rem]">
          <button className="mt-[6rem] mb-8 w-[309px] py-[16px] px-[32px] bg-white bg-opacity-[15%] leading-6 text-[#2a254b] font-satoshi font-normal hover:bg-darkPrimary shadow border border-darkPrimary hover:text-white transition-all duration-300 ease-in-out text-lg">
            Get in touch
          </button>
        </div>
      </div>

      <div className="md:relative">
        <Image
          src="/images/blackSofa.png"
          alt="Black Sofa Image"
          width={200}
          height={200}
          className="w-[390px] h-[358px] md:w-[890px] lg:w-[720px] md:h-[603px]"
        />
      </div>
    </div>
  );
};

export default AboutGetInTouch;
