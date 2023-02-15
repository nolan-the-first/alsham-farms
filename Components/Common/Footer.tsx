import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import AppContext from "../../AppContext";
import BgTexture from "../../public/Assets/Images/BgTexture.png";

const Footer = () => {
  let {
    isArabic,
    address,
    email_address,
    phone_number,
    facebook_link,
    instagram_link,
    linkedin_link,
  } = useContext(AppContext);
  return (
    <div
      className="px-44 sm:px-0 py-24 bg-blue text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${BgTexture.src})` }}
    >
      <div className="flex items-center justify-between tab:flex-col tab:gap-32 py-24 border-y-2 border-white border-opacity-30 pr-20 sm:px-14">
        <Image
          src={require("../../public/Assets/Images/Logo.png")}
          className="w-48"
          alt=""
        />
        <div className="tab:text-2xl">
          <p className="mb-4 flex items-center gap-4">
            <FontAwesomeIcon
              className="text-orange text-xl"
              icon={faMapMarker}
            />
            {"Lorem Ipsum"}
          </p>

          <div className="flex items-center justify-between gap-16 mb-8">
            <Link
              href={`tel:${phone_number}`}
              className="flex items-center gap-4"
            >
              <FontAwesomeIcon className="text-orange text-xl" icon={faPhone} />
              {phone_number}
            </Link>
            <Link
              href={`mailto:${email_address}`}
              className="flex items-center gap-4"
            >
              <FontAwesomeIcon
                className="text-orange text-xl"
                icon={faEnvelope}
              />
              {email_address}
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <h3 className="text-gray-100 ">Social Media</h3>
            <ul className="flex items-center text-3xl text-orange gap-6">
              <li>
                <Link target="_blank" href={linkedin_link}>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </li>
              <li>
                <Link target="_blank" href={facebook_link}>
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </li>
              <li>
                <Link target="_blank" href={instagram_link}>
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-4 text-gray-100 sm:px-12">
        <ul className="flex items-center sm:w-full sm:justify-between gap-4 tab:text-xl">
          <li className="">
            <Link href={"#about"}>{isArabic ? "من نحن" : "ABOUT US"}</Link>
          </li>
          <li className="">
            <Link href={"#contact"}>
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </Link>
          </li>
          <li className="">
            <Link href={"#services"}>{isArabic ? "الخدمات" : "SERVICES"}</Link>
          </li>
          <li className="">
            <Link href={"#why-us"}>{isArabic ? "لماذا نحن" : "WHY US"}</Link>
          </li>
        </ul>
        <p className="sm:hidden">
          {isArabic
            ? "مزارع الشام 2023 جميع الحقوق محفوظة"
            : "Copyright © 2023 • Alsham Farms"}
        </p>
      </div>
    </div>
  );
};

export default Footer;
