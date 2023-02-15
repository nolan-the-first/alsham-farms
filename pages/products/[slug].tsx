import { GetServerSideProps } from "next";
import Landing from "../../Components/Sections/SingleProductPage/Landing";
import ProductDetails from "../../Components/Sections/SingleProductPage/ProductDetails";
import axios from "axios";

const SingleProduct = ({ product }) => {
  return (
    <div>
      <Landing
        landing_headline={product.name}
        price={product.price}
        rating={product.rating}
        cover_image={product.cover_image}
      />
      <ProductDetails
        product_details={product.product_details}
        images={product.images}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  let product;
  await axios
    .get(`https://alshambackend.teryaq.media/api/products/${params.slug}/`, {
      headers: { "Accept-Language": `${locale}` },
    })
    .then((res) => {
      product = res.data;
    });
  return {
    props: { product },
  };
};

export default SingleProduct;
