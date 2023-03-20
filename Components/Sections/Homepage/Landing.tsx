import { useContext, useState } from "react";
import Link from "next/link";
import AppContext from "../../../AppContext";
import LandingBg from "../../../public/Assets/Images/Homepage/LandingBg.png";
import { Button } from "../../StyledComponents/Button";

const Landing = ({ landing_headline, image }) => {
  let { isArabic, whatsapp_number } = useContext(AppContext);
  // Swiper Function
  return (
    <div
      className="relative h-screen mob:h-60vh overflow-hidden px-16 py-12  flex flex-col items-start justify-between mob:justify-center tab:items-center tab:text-center  bg-cover bg-right-bottom"
      style={isArabic ? { direction: "rtl" } : {}}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-50"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div />
      <h1 className="font-bold text-4xl text-white max-w-lg mob:mb-12 font-rsail">
        {landing_headline}
      </h1>
      <Link
        href="https://wa.link/t76thp"
        className="-translate-y-20 tab:translate-y-0"
      >
        <Button className="shadow-md" bgColor="red" textColor="white">
          {isArabic ? "تواصل معنا" : "Get In Touch"}
        </Button>
      </Link>
    </div>
  );
};

export default Landing;
