import Link from "next/link";
import React from "react";

const ProductCard = ({ name, image, slug }) => {
  return (
    <Link
      href={`/products/${slug}`}
      className="flex items-end justify-center w-full aspect-[1/1.1] bg-cover bg-center rounded-lg overflow-hidden shadow-xl"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="text-center py-5 bg-[#F5F5F5] font-bold text-3xl w-full ">
        {name}
      </div>
    </Link>
  );
};

export default ProductCard;
