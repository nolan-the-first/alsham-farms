import Landing from "../../Components/Sections/Homepage/Landing";
import {
  Product,
  ProductsProps,
  FoodCategory,
} from "../../public/Assets/Types/types";
import landingBg from "../../public/Assets/Images/Products/LandingBg.png";
import { GetServerSideProps } from "next";
import ProductsSection from "../../Components/Sections/ProductsPage/ProductsSection";
import product1 from "../../public/Assets/Images/Products/product1.png";
import product2 from "../../public/Assets/Images/Products/product2.png";
import product3 from "../../public/Assets/Images/Products/product3.png";
import product4 from "../../public/Assets/Images/Products/product4.png";
import product5 from "../../public/Assets/Images/Products/product5.png";
import product6 from "../../public/Assets/Images/Products/product6.png";
import p1 from "../../public/Assets/Images/Products/SingleProduct/p1.png";
import p2 from "../../public/Assets/Images/Products/SingleProduct/p2.png";
import p3 from "../../public/Assets/Images/Products/SingleProduct/p3.png";
import p4 from "../../public/Assets/Images/Products/SingleProduct/p4.png";
import axios from "axios";

const index = ({ productsPageProps, products, categories }) => {
  return (
    <div>
      <Landing
        landing_headline={productsPageProps.landing_headline}
        image={productsPageProps.landing_image}
      />
      <ProductsSection products={products} categories={categories} />
    </div>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  let productsPageProps: ProductsProps = {
    landing_headline: `Lorem ipsum dolor sit amet consectetur. Sit sagittis diam`,
    landing_image: landingBg.src,
  };
  let products;
  await axios
    .get("https://alshambackend.teryaq.media/api/products/", {
      headers: { "Accept-Language": `${locale}` },
    })
    .then((res) => {
      products = res.data;
    });
  let categories;
  await axios
    .get("https://alshambackend.teryaq.media/api/food_categories/", {
      headers: { "Accept-Language": `${locale}` },
    })
    .then((res) => {
      categories = res.data;
    });
  return {
    props: {
      productsPageProps: productsPageProps,
      products: products,
      categories: categories,
    },
  };
};
