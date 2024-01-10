import React from "react";
import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { TiTick } from "react-icons/ti";
import { Button } from "../ui/button";
const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["latin"] });
const interBold = Inter({ weight: "800", subsets: ["latin"] });
const interMedium = Inter({ weight: "500", subsets: ["latin"] });
const interLight = Inter({ weight: "200", subsets: ["latin"] });

interface Props {
  name: string;
  id: number;
  description: string;
  fakePrice: string;
  discount: string;
  price: string;
  revisions: string;
  features: string[];
}

const PricingCard = ({
  name,
  description,
  discount,
  fakePrice,
  features,
  price,
  revisions,
  id,
}: Props) => {
  return (
    <div
      className={`w-[360px] px-8 py-10 items-center  justify-center flex flex-col gap-[10px] ${
        id == 2 ? "border-[#fc5185]" : "border-pure-greys-200"
      } h-full border-[1px]  text-white rounded-md transition-all relative duration-300 hover:scale-105`}
    >
      {id === 2 && (
        <div
          className={` duration-300 transition-all hover:scale-110 ${
            interBold.className
          } text-white self-stretch ${
            id === 2 ? "bg-[#fc5185]" : "bg-[#5025d1]"
          } text-[18px] leading-[36px] text-center px-4 py-2 absolute -top-5 rounded-full left-[50%] translate-x-[-50%]`}
        >
          Most Popular
        </div>
      )}
      <h1
        className={`text-[24px] ${interBold.className} leading-[32px] font-[700]`}
      >
        {name}
      </h1>
      <p
        className={`${interMedium.className} text-center  text-[14px] leading-[24px]`}
      >
        {description}
      </p>
      <div className="flex items-center justify-center flex-row gap-4">
        <p className="line-through">{fakePrice}</p>
        <Badge
          variant="outline"
          className={`bg-[#ebe4ff] px-4 py-2 ${
            id === 2 ? "text-[#fc5185]" : "text-[#5025d1]"
          } border-none ${interBold.className}`}
        >
          SAVE {discount}
        </Badge>
      </div>
      <h1 className={`text-[36px] ${interBold.className} leading-[56px]`}>
        <sub className="">₹</sub>
        {price}
      </h1>
      <p
        className={`${
          interMedium.className
        } text-[#8c85ff] text-center  text-[18px] ${
          id === 2 ? "text-[#fc5185]" : "text-[#5025d1]"
        } leading-[24px]`}
      >
        +{revisions} revisions are free
      </p>
      <Button
        className={`bg-[#673de6] duration-300 transition-all hover:scale-110 ${
          interBold.className
        } text-white self-stretch ${
          id === 2 ? "bg-[#fc5185]" : "bg-[#5025d1]"
        } text-[16px] leading-[24px]`}
      >
        Buy Now
      </Button>
      <div className="h-[2px] my-[30px] bg-white w-full" />
      <h5
        className={`text-[18px] self-start ${interBold.className} leading-[24px] font-[700]`}
      >
        Top Features
      </h5>
      <div className="flex flex-col gap-4 items-start">
        {features.map((feature, index) => (
          <div
            className="flex flex-row items-center justify-start  gap-2"
            key={index}
          >
            <TiTick className="text-caribbeangreen-300 w-4 h-4" />
            <p className={`w-full ${interMedium.className}`}>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
