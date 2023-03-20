import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppContext from "../AppContext";
import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";
import { GlobalProps } from "../public/Assets/Types/types";
import Link from "next/link";
import "../styles/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// Font Import

function MyApp({ Component, pageProps }) {
  // Global Props Context
  let contextInitialValues: GlobalProps = {
    facebook_link: "facebook.com",
    instagram_link: "instagram.com",
    tiktok_link: "https://www.tiktok.com/@alshamfarms.ae?_t=8ao4nNnAxGR&_r=1",
    address: "723 Jumeirah St - near Dubai London Hospital",
    phone_number: "0123456789",
    email_address: "name@doamin.tld",
    footer_license: "Copyright © 2023 • Al-Sham Farms",
    screenWidth: 0,
    whatsapp_number: "09123456789",
    isArabic: null,
  };
  let [globalInfo, setGlobalInfo] = useState<GlobalProps>(contextInitialValues);
  // Fetch Global value then update the context
  let isArabic = useRouter().locale == "ar";
  useEffect(() => {
    // Fetch
    let fetchedGlobalProps: GlobalProps = {
      facebook_link: "https://www.facebook.com/alshamfarms.ae?mibextid=ZbWKwL",
      instagram_link: "instagram.com",
      tiktok_link: "https://www.tiktok.com/@alshamfarms.ae?_t=8ao4nNnAxGR&_r=1",
      address: "723 Jumeirah St - near Dubai London Hospital",
      phone_number: "+043883800",
      whatsapp_number: "+0558141666",
      email_address: "Info@alshamfarms.ae",
      footer_license: "Copyright © 2023 • Al-Sham Farms",
      screenWidth: window.innerWidth,
      isArabic: isArabic,
    };
    setGlobalInfo(fetchedGlobalProps);
  }, [isArabic]);

  return (
    <AppContext.Provider value={globalInfo}>
      <main
        className={`w-screen overflow-hidden`}
        style={isArabic ? { direction: "rtl" } : {}}
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
        {/* Whatsapp Icon */}
        <div className="fixed bottom-8 flex flex-col right-8 gap-6 items-center justify-center ">
          <Link
            href={"https://wa.link/t76thp"}
            className="w-20 flex items-center justify-center bg-red aspect-square rounded-full border-white border-4 text-5xl text-white"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </Link>
          <Link
            href={
              "https://play.google.com/store/apps/details?id=com.makane.alshamfarms&hl=en&gl=US"
            }
            className="w-20 flex items-center justify-center bg-red aspect-square rounded-full border-white border-4 text-4xl text-white"
          >
            <FontAwesomeIcon icon={faGooglePlay} />
          </Link>
        </div>
      </main>
    </AppContext.Provider>
  );
}

export default MyApp;
