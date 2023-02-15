import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppContext from "../AppContext";
import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";
import { GlobalProps } from "../public/Assets/Types/types";
import "../styles/globals.css";
// Font Import

function MyApp({ Component, pageProps }) {
  // Global Props Context
  let contextInitialValues: GlobalProps = {
    facebook_link: "facebook.com",
    instagram_link: "instagram.com",
    linkedin_link: "linkedin.com",
    address: "lorem ipsum",
    phone_number: "0123456789",
    email_address: "name@doamin.tld",
    footer_license: "Copyright © 2023 • Al-Sham Farms",
    screenWidth: 0,
    isArabic: null,
  };
  let [globalInfo, setGlobalInfo] = useState<GlobalProps>(contextInitialValues);
  // Fetch Global value then update the context
  let isArabic = useRouter().locale == "ar";
  useEffect(() => {
    // Fetch
    let fetchedGlobalProps: GlobalProps = {
      facebook_link: "facebook.com",
      instagram_link: "instagram.com",
      linkedin_link: "linkedin.com",
      address: "lorem ipsum",
      phone_number: "0123456789",
      email_address: "name@doamin.tld",
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
      </main>
    </AppContext.Provider>
  );
}

export default MyApp;
