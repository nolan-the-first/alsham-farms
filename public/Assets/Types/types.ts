export interface GlobalProps {
  isArabic: boolean;
  screenWidth: number;
  facebook_link: string;
  tiktok_link: string;
  instagram_link: string;
  address: string;
  email_address: string;
  phone_number: string;
  footer_license: string;
  whatsapp_url: string;
  android_url: string;
  apple_url: string;
}

export interface Product {
  name: string;
  images: any;
  cover_image?: any;
  product_details?: string;
  slug: string;
  rating: number;
  price: string;
  tags?: FoodCategory[];
}

export interface FoodCategory {
  name: string;
  icon: any;
}

export interface News {
  news_title: string;
  news_description: string;
  main_image: string;
  slug: string;
}

export interface Testimonial {
  name: string;
  image: any;
  testimonial: string;
  rating: number;
}

// Pages Props
export interface HomepageData {
  landing_headline: string;
  landing_image: any;
  about_us_headline: string;
  about_us_title: string;
  about_us_text: string;
  about_us_image_1: any;
  about_us_image_2: any;
  our_menu_headline: any;
  latest_products_headline: string;
  latest_news_headline: string;
  testimonials_headline: string;
  contact_us_headline: string;
  play_store_link: string;
  appstore_link: string;
  contact_us_title: string;
  contact_us_app_supporting_text: string;
  contact_us_social_supporting_text: string;
}

export interface ProductsProps {
  landing_headline: string;
  landing_image: string;
}
