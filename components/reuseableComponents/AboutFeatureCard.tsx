import { CardProps } from "@/types/components";
import Image from "next/image";

const AboutFeatureCard: React.FC<CardProps> = ({ image, heading, para }) => {
  return (
    <div className="p-8 flex border border-transparent flex-col gap-4 hover:bg-gray-300 hover:border-darkPrimary transition-all duration-300 ease-in-out rounded bg-lightGray  w-full lg:w-full md:w-[300px] md:p-2 md:py-8 lg:py-8 lg:px-8 md:mx-4 lg:mx-0">
      <Image
        src={`/images/${image}.png`}
        alt={`${image} Icon Image`}
        width={50}
        height={50}
        className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] rounded"
      />
      <h5 className="font-clash font-normal leading-[22.4px] text-darkPrimary text-[1.3rem]">
        {heading}
      </h5>
      <p className="font-satoshi font-normal leading-[21px] text-darkPrimary md:text-[0.9rem]">
        {para}
      </p>
    </div>
  );
};

export default AboutFeatureCard;
