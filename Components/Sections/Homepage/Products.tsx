import { Section } from "../../StyledComponents/Section";
import BgImage from "../../../public/Assets/Images/BgTexture.png";
import ProductCard from "../../Cards/ProductCard";
import SectionHeading from "../../Common/SectionHeading";
import Image from "next/image";
import Chilies from "../../../public/Assets/Images/Chilies.png";
import Link from "next/link";
import { useContext } from "react";
import AppContext from "../../../AppContext";

const Products = ({ products, latest_products_headline }) => {
  let { isArabic } = useContext(AppContext);
  return (
    <Section
      className="bg-cover bg-center w-screen overflow-hidden"
      style={{ backgroundImage: `url(${BgImage.src})` }}
    >
      <SectionHeading title={latest_products_headline} white={true} />
      <div className="grid grid-cols-3 tab:grid-cols-2 mob:grid-cols-1 gap-8 w-full z-10 mb-8">
        {products.map(({ name, images, slug }, i) => {
          return (
            <ProductCard
              name={name}
              image={images[0].image}
              slug={slug}
              key={i}
            />
          );
        })}
      </div>
      <Link
        className="font-bold text-3xl text-white pb-1 border-b-4 border-white z-50"
        href={"/products"}
      >
        {isArabic ? "جميع المشاريع" : "See All Products"}
      </Link>
      <Image
        src={require("../../../public/Assets/Images/Chilies.png")}
        alt=""
        className="absolute top-32 left-32"
      />
      <Image
        src={require("../../../public/Assets/Images/Chilies.png")}
        alt=""
        className="absolute -bottom-32 right-0"
      />
    </Section>
  );
};

export default Products;
