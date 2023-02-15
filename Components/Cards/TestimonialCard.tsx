import Image from "next/image";

const TestimonialCard = ({ name, image, testimonial, rating }) => {
  return (
    <div
      className="flex flex-col items-center rounded-lg shadow-2xl"
      style={{ boxShadow: `0rem 0rem 8px 0rem rgb(0 0 0 / 0.2)` }}
    >
      <Image
        src={image}
        alt=""
        width={1000}
        height={1000}
        className="w-40 aspect-square rounded-full -translate-y-1/2"
      />
      <p className="font-bold text-lg mb-4  px-28 tab:px-16 mob:px-10">
        {testimonial}
      </p>
      <p className="font-bold text-lg mb-8">{name}</p>
    </div>
  );
};

export default TestimonialCard;
