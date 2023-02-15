import BgTexture from "../../../public/Assets/Images/BgTexture.png";

const ProductDetails = ({ product_details, images }) => {
  return (
    <div className="py-14 px-32 tab:px-20 mob:px-12 relative">
      <div
        className="mb-10 tab:text-xl"
        dangerouslySetInnerHTML={{ __html: product_details }}
      />
      <div className="relative grid grid-cols-3 tab:grid-cols-2 gap-8 min-h-[20rem] tab:gap-4">
        {images.map(({ image }, i) => {
          return (
            <div
              className={`w-full  bg-cover bg-center ${
                i == 0 ? "row-span-2" : "aspect-[2/1.4]"
              }`}
              style={{ backgroundImage: `url(${image})` }}
              key={i}
            />
          );
        })}
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-1/3 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${BgTexture.src})` }}
      />
    </div>
  );
};

export default ProductDetails;
