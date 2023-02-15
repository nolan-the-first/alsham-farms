import { createContext } from "react";
import { GlobalProps } from "./public/Assets/Types/types";

const contextInitialValues: GlobalProps = {
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

const AppContext = createContext<GlobalProps>(contextInitialValues);

export default AppContext;
