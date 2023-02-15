import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import AppContext from "../../AppContext";
import { useRouter } from "next/router";

const Header = () => {
  // Global Context
  let { isArabic } = useContext(AppContext);
  // header state based on scrolled destince
  let [scrollHeader, setScrollHeader] = useState<boolean>(false);

  useEffect(() => {
    // activate scroll height when scroll passed 300px
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    });
  }, []);

  // Change Language Function Based on what page we're in
  let router = useRouter();
  function changeLang(lang: string) {
    router.push(router.asPath, undefined, { locale: lang });
  }

  return (
    <>
      <header
        className={`headertab:bg-none border-opacity-25 fixed top-0 left-0 flex tab:flex-row-reverse justify-between items-center px-16 tab:item-center tab:px-4 tab:justify-between  w-full duration-300 z-[100000] ${
          scrollHeader ? " backdrop-blur-[2px] py-4" : "py-8 tab:py-0"
        }`}
        style={isArabic ? { direction: "ltr" } : {}}
      >
        <span>
          <Link
            href={{ pathname: "/" }}
            replace
            className="flex items-end gap-3 tab:scale-75 font-bold"
          >
            <Image
              src={require("../../public/Assets/Images/Logo.png")}
              alt="Alshams-Farm"
              width={100}
              height={97}
              className={`z-50 cursor-pointer mob:scale-75 animate-fadeInTop duration-150 ${
                scrollHeader && "scale-90"
              }`}
            />
          </Link>
        </span>
        <button
          className="text-2xl text-white"
          onClick={() => changeLang(isArabic ? "en" : "ar")}
        >
          {isArabic ? "English" : "العربية"}
        </button>
      </header>
    </>
  );
};

export default Header;
