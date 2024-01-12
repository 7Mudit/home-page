import React from "react";

import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import PricingCard from "./PricingCard";
import Heading from "./Heading";

const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });

const PricingData = [
  {
    id: 1,
    name: "Starter Plan",
    description: "Ideal for small businesses or personal websites",
    fakePrice: "₹50,000.00",
    discount: "20%",
    price: "40,000.00",
    revisions: "2",
    features: [
      "Custom Website Design",
      "Responsive Design for Mobile Devices",
      "Basic SEO Setup",
      "5 Pages (e.g., Home, About, Services, Blog, Contact)",
      "Social Media Integration",
      "Basic Security Setup",
      "1 Month of Maintenance and Support",
    ],
  },
  {
    id: 2,
    name: "Business Plan",
    description: "Optimized for growing businesses and eCommerce",
    fakePrice: "₹1,20,000.00",
    discount: "25%",
    price: "90,000.00",
    revisions: "3",
    features: [
      "Advanced Custom Website Design",
      "E-commerce Functionality (up to 50 products)",
      "Advanced SEO Optimization",
      "10 Pages Including a Blog Setup",
      "Social Media Integration and Basic Marketing Tools",
      "Enhanced Security Features",
      "3 Months of Maintenance and Support",
    ],
  },
  {
    id: 3,
    name: "Enterprise Plan",
    description: "Comprehensive solution for large-scale businesses",
    fakePrice: "₹2,50,000.00",
    discount: "30%",
    price: "1,75,000.00",
    revisions: "Unlimited",
    features: [
      "Premium Custom Design with Interactive Elements",
      "Advanced E-commerce Solutions (Unlimited Products)",
      "Complete SEO and Marketing Suite",
      "Unlimited Pages and Content Management",
      "Integrated CRM and Payment Solutions",
      "Top-Tier Security and Data Handling",
      "1 Year of Comprehensive Maintenance and Support",
    ],
  },
];

const PricingSection = () => {
  return (
    <>
      {/* heading */}
      <Heading heading="Want a Website?" />

      <main className="w-full md:w-11/12 pt-[100px] flex-wrap items-center px-5  md:items-start justify-center flex-1  mx-auto flex flex-row gap-[50px] ">
        {PricingData.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </main>
    </>
  );
};

export default PricingSection;
