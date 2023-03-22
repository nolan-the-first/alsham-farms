import { createContext } from "react";
import { GlobalProps } from "./public/Assets/Types/types";

const contextInitialValues: GlobalProps = {
  facebook_link: "facebook.com",
  instagram_link: "instagram.com",
  address: "lorem ipsum",
  phone_number: "0123456789",
  email_address: "name@doamin.tld",
  footer_license: "Copyright © 2023 • Al-Sham Farms",
  tiktok_link: "https://www.tiktok.com/@alshamfarms.ae?_t=8ao4nNnAxGR&_r=1",
  whatsapp_url: "+0123456789",
  android_url: "",
  apple_url: "",
  screenWidth: 0,
  isArabic: null,
};

const AppContext = createContext<GlobalProps>(contextInitialValues);

export default AppContext;
