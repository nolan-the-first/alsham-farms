import { useContext } from "react";
import AppContext from "../../../AppContext";
import SectionHeading from "../../Common/SectionHeading";
import { Section } from "../../StyledComponents/Section";
import BgTexture from "../../../public/Assets/Images/BgTexture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppStore,
  faFacebookF,
  faGooglePlay,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Chili1 from "../../../public/Assets/Images/Chili1.png";
import Link from "next/link";
import Image from "next/image";

const Contact = ({
  contact_us_headline,
  contact_us_social_supporting_text,
  contact_us_app_supporting_text,
}) => {
  let {
    isArabic,
    address,
    phone_number,
    email_address,
    tiktok_link,
    facebook_link,
    instagram_link,
  } = useContext(AppContext);
  return (
    <Section
      className="bg-cover bg-center"
      id="contact"
      style={{ backgroundImage: `url(${BgTexture.src})` }}
    >
      <SectionHeading title={contact_us_headline} white={true} />
      <div
        className={`flex flex-row tab:flex-col items-stretch text-start gap-20 w-full after:absolute after:bottom-0 after:h-9/10 after:bg-orange after:w-1/4 after:-z-30 tab:after:hidden z-10 ${
          isArabic ? "after:-left-0" : "after:right-0"
        }`}
        id="contact"
      >
        <form className="basis-1/2 w-full tab:text-center">
          <h3 className="font-bold text-3xl mb-8 text-white">
            {isArabic ? "لنتعاون معا" : "Let's Collaborate"}
          </h3>
          <input
            type="text"
            placeholder={isArabic ? "الاسم" : "Your Name"}
            className="w-full bg-[#F8F8F8] text-lg text-black font-bold text-opacity-50 py-3 px-10 boder-none outline-none mb-8 rounded-md"
          />
          <input
            type="text"
            placeholder={isArabic ? "البريد الالكتروني" : "Email Address"}
            className="w-full bg-[#F8F8F8] text-lg text-black font-bold text-opacity-50 py-3 px-10 boder-none outline-none mb-8 rounded-md"
          />
          <textarea
            placeholder={isArabic ? "رسالتك" : "Your Message"}
            className="w-full bg-[#F8F8F8] text-lg text-black font-bold text-opacity-50 py-3 px-10 h-60 boder-none outline-none rounded-md"
          />
          <button className="bg-red py-4 font-bold text-white w-full rounded-sm">
            {isArabic ? "ارسل" : "Submit"}
          </button>
        </form>
        <div className="flex flex-col items-center basis-1/2 text-white tab:pr-0 font-bold">
          <p className=" text-3xl text-center mb-7 leading-[3rem]">
            {contact_us_app_supporting_text}
          </p>
          <div className="flex items-center gap-8 text-7xl tab:mb-10">
            <Link href={"/"}>
              <FontAwesomeIcon icon={faGooglePlay} />
            </Link>
            <Link href={"/"}>
              <FontAwesomeIcon icon={faAppStore} />
            </Link>
          </div>
          <div className="flex flex-col items-center w-full mt-auto">
            <p className="text-3xl mb-4">{contact_us_social_supporting_text}</p>
            <div className="flex items-center gap-6">
              <Link
                href={`${tiktok_link}`}
                className="w-10 aspect-square rounded-full flex items-center justify-center border-2 border-white border-opacity-25"
              >
                {<FontAwesomeIcon icon={faTiktok} />}
              </Link>
              <Link
                href={`${facebook_link}`}
                className="w-10 aspect-square rounded-full flex items-center justify-center border-2 border-white border-opacity-25"
              >
                {<FontAwesomeIcon icon={faFacebookF} />}
              </Link>
              <Link
                href={`${instagram_link}`}
                className="w-10 aspect-square rounded-full flex items-center justify-center border-2 border-white border-opacity-25"
              >
                {<FontAwesomeIcon icon={faInstagram} />}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={require("../../../public/Assets/Images/Chili1.png")}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2"
      />
    </Section>
  );
};

export default Contact;
