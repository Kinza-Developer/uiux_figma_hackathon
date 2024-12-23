"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../reuseableComponents/ProductCard";

const PopularProducts = () => {
  return (
    <div className="relative mt-[14rem] h-[573px] md:h-[744px] bg-white md:px-[2rem] mx-auto lg:px-0 lg:mx-[1.5rem] md:mt-0 lg:top-[20rem]">
      <h4 className="relative my-4 pl-4 font-clash font-normal leading-[24.6px] text-darkPrimary text-lg lg:text-4xl md:text-3xl lg:bottom-[10rem]">
        Our popular products
      </h4>

      <div className="lg:hidden px-4 md:px-0 py-2">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          loop={true}
          slidesPerView={2}
          spaceBetween={16}
        >
          <SwiperSlide>
            <ProductCard
              image="lamp"
              heading="The Lucy Lamp"
              price="399"
              id="2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              image="Vase"
              heading="Rustic Vase Set"
              price="155"
              id="1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              image="SilkVase"
              heading="The Silky Vase"
              price="125"
              id="3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              image="BlackChair"
              heading="The Dandy Chair"
              price="250"
              id="4"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="relative hidden lg:bottom-[8rem] lg:h-[375px] lg:flex gap-[30px] group">
        <div
          key="/products/id10"
          className="hidden lg:flex flex-col w-[630px] h-[375px] gap-[2rem]"
        >
          <Image
            src={`/images/sofa.png`}
            alt="Sofa Image"
            width={200}
            height={200}
            className="w-full h-[375px]"
          />

          <div className="flex flex-col gap-[8px]">
            <h4 className="font-clash font-normal leading-7 text-darkPrimary lg:text-xl">
              The Poplar suede sofa
            </h4>
            <p className="font-satoshi font-normal leading-[27px] text-darkPrimary lg:text-xl">
              &pound; 980
            </p>
          </div>

          {/* Add to Cart button */}
          <button className="w-[630px] absolute bottom-0 left-[19.7rem] transform -translate-x-1/2 px-4 lg:px-8 py-2 lg:py-4 bg-black/70 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <Link href={`/products/id10`} className="text-sm lg:text-xl">
              Add to Cart
            </Link>
          </button>
        </div>
        <ProductCard
          image="BlackChair"
          heading="The Dandy Chair"
          price="250"
          id="4"
        />
        <ProductCard
          image="oldChair"
          heading="The Dandy Chair"
          price="250"
          id="9"
        />
      </div>

      {/* <div className="relative lg:-left-[4rem] lg:top-[4rem] flex lg:justify-center mt-0 md:mt-[4rem] lg:mt-0 md:left-[12rem]">
        <button className=" m-2 mt-4 w-[309px] py-[16px] px-[32px] bg-lightGray bg-opacity-[15%] leading-6 text-[#2a254b] font-satoshi font-normal hover:bg-darkPrimary hover:text-white transition-all duration-300 ease-in-out text-lg">
          View collection
        </button>
      </div> */}
      <button className="relative md:top-[3rem] lg:left-[32rem] md:left-[10rem] m-2 w-[309px] py-[16px] px-[32px] bg-lightGray bg-opacity-[15%] leading-6 text-[#2a254b] font-satoshi font-normal hover:bg-darkPrimary hover:text-white transition-all duration-300 ease-in-out text-lg">
        View collection
      </button>
    </div>
  );
};

export default PopularProducts;
