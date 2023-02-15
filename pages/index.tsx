import Landing from "../Components/Sections/Homepage/Landing";
import { GetServerSideProps } from "next";
import bgImage from "../public/Assets/Images/Homepage/LandingBg.png";
import {
  FoodCategory,
  HomepageData,
  News,
  Product,
  Testimonial,
} from "../public/Assets/Types/types";
// temp
import product1 from "../public/Assets/Images/Homepage/Projects/Project1.png";
import product2 from "../public/Assets/Images/Homepage/Projects/Project2.png";
import product3 from "../public/Assets/Images/Homepage/Projects/Project3.png";
import CAT1 from "../public/Assets/Svg/CAT1.svg";
import CAT2 from "../public/Assets/Svg/CAT2.svg";
import CAT3 from "../public/Assets/Svg/CAT3.svg";
import CAT4 from "../public/Assets/Svg/CAT4.svg";
import CAT5 from "../public/Assets/Svg/CAT5.svg";
import CAT6 from "../public/Assets/Svg/CAT6.svg";
import news1 from "../public/Assets/Images/Homepage/News/News1.png";
import news2 from "../public/Assets/Images/Homepage/News/News2.png";
import person from "../public/Assets/Images/Clients/Person.png";
import about1 from "../public/Assets/Images/Homepage/About1.png";
import about2 from "../public/Assets/Images/Homepage/About2.png";
import About from "../Components/Sections/Homepage/About";
import Products from "../Components/Sections/Homepage/Products";
import MenuSeciton from "../Components/Sections/Homepage/MenuSeciton";
import Newsection from "../Components/Sections/Homepage/News";
import NewsSection from "../Components/Sections/Homepage/News";
import Testimonials from "../Components/Sections/Homepage/Testimonial";
import Contact from "../Components/Sections/Homepage/Contact";
import axios from "axios";

export default function Home({
  homepageData,
  products,
  foodCategories,
  news,
  testimonials,
}: {
  homepageData: HomepageData;
  products: Product[];
  foodCategories: FoodCategory[];
  news: News[];
  testimonials: Testimonial[];
}) {
  return (
    <div>
      <Landing
        landing_headline={homepageData.landing_headline}
        image={homepageData.landing_image}
      />
      <About
        about_us_healdine={homepageData.about_us_headline}
        about_us_title={homepageData.about_us_title}
        about_us_text={homepageData.about_us_text}
        about_us_image_1={homepageData.about_us_image_1}
        about_us_image_2={homepageData.about_us_image_2}
      />
      <Products
        products={products}
        latest_product_headline={homepageData.latest_product_headline}
      />
      <MenuSeciton
        our_menu_headline={homepageData.our_menu_headline}
        foodCategories={foodCategories}
      />
      <NewsSection
        news={news}
        news_headline={homepageData.latest_news_headline}
      />
      <Testimonials
        testimonials={testimonials}
        testimonials_headline={homepageData.testimonials_headline}
      />
      <Contact
        contact_us_headline={homepageData.contact_us_headline}
        contact_us_app_supporting_text={
          homepageData.contact_us_app_supporting_text
        }
        contact_us_social_supporting_text={
          homepageData.contact_us_social_supporting_text
        }
      />
      <div className="px-16 tab:px-8 mob:px-4 rounded-2xl overflow-hidden -translate-y-16">
        <div className="map">
          <iframe
            title="Company location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d888.3493809915835!2d46.7469844!3d24.6867003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f040286ca8a73%3A0x5f114419f020b16!2s4476%20Al%20Hamdi%2C%206880%2C%20Ar%20Rabwah%2C%20Riyadh%2012816%2C%20Saudi%20Arabia!5e1!3m2!1sen!2s!4v1668786444196!5m2!1sen!2s"
            width="800"
            height="600"
            className="rounded-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  let homepageData;
  await axios
    .get("https://alshambackend.teryaq.media/api/homepage/", {
      headers: { "Accept-Language": `${locale}` },
    })
    .then((res) => {
      homepageData = res.data[0];
    });

  let products;
  await axios
    .get("https://alshambackend.teryaq.media/api/products/", {
      headers: { "Accept-Language": `${locale}` },
    })
    .then((res) => {
      products = res.data;
    });

  let foodCategories;
  await axios
    .get("https://alshambackend.teryaq.media/api/food_categories/", {
      headers: { "Accept-Language": `${locale}` },
    })
    .then((res) => {
      foodCategories = res.data;
    });

  let news;
  await axios
    .get("https://alshambackend.teryaq.media/api/news/", {
      headers: { "Accept-Language": `${locale}` },
    })
    .then((res) => {
      news = res.data;
    });

  let testimonials;
  await axios
    .get("https://alshambackend.teryaq.media/api/testimonial/", {
      headers: { "Accept-Language": `${locale}` },
    })
    .then((res) => {
      testimonials = res.data;
    });

  return {
    props: {
      homepageData: homepageData,
      products: products,
      foodCategories: foodCategories,
      news: news,
      testimonials: testimonials,
    },
  };
};
