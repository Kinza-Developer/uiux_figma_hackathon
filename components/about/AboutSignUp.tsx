const AboutSignUp = () => {
    return (
      <div className="relative w-[390px] top-[50rem] lg:top-[27.5rem] md:top-[40rem] h-[292px] lg:w-[1300px] md:h-[481px] md:w-[890px] md:mt-[8rem] md:border-[3.5rem] md:border-lightGray bg-white p-4 bottom-[5rem] md:mx-auto lg:mx-5 md:justify-center md:items-center lg:justify-normal lg:items-start">
        <div className="relative top-[4rem] flex flex-col md:items-center gap-[16px]">
          <h4 className="font-clash text-xl font-normal leading-[28px] md:text-4xl lg:text-5xl text-[#2a254b]">
            Join the club and get the benefits
          </h4>
          <p className="font-satoshi leading-[21px] font-normal text-darkPrimary text-[14px] lg:text-xl md:text-lg md:w-[540px] text-center">
            Sign up for our newsletter and receive exclusive offers on new ranges,
            sales, pop up stores and more
          </p>
        </div>
        <div className="md:relative mt-[6rem] flex md:justify-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-lightGray placeholder:font-satoshi focus:outline-none py-4 px-5 lg:w-[400px] md:w-[340px]"
          />
          <button className="px-[32px] py-[16px] bg-darkPrimary text-white font-satoshi font-normal leading-6 hover:bg-navbarColor hover:text-darkPrimary">
            Sign up
          </button>
        </div>
      </div>
    );
  };
  
  export default AboutSignUp;
  