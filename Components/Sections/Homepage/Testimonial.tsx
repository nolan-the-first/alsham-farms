import SectionHeading from "../../Common/SectionHeading";
import { Section } from "../../StyledComponents/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimonialCard from "../../Cards/TestimonialCard";
import { Swiper as Swip } from "swiper";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import AppContext from "../../../AppContext";

const Testimonials = ({ testimonials_headline, testimonials }) => {
  let { screenWidth } = useContext(AppContext);
  // Swiper Function
  let [swiper, setSwiper] = useState<null | Swip>(null);
  const slideNext = () => {
    swiper?.slideNext();
  };
  const slidePrev = () => {
    swiper?.slidePrev();
  };
  return (
    <Section
      padding={screenWidth < 768 ? "7.1rem 2rem" : "7.1rem 10rem"}
      style={{ direction: "ltr" }}
    >
      <SectionHeading title={testimonials_headline} />
      <Swiper
        spaceBetween={50}
        slidesPerView={1.1}
        centeredSlides={true}
        autoplay={true}
        onSwiper={(s) => setSwiper(s)}
        className="w-full relative"
      >
        {testimonials.map(({ name, image, testimonial, rating }, i) => {
          return (
            <SwiperSlide key={i}>
              <TestimonialCard
                name={name}
                image={image}
                testimonial={testimonial}
                rating={rating}
              />
            </SwiperSlide>
          );
        })}
        <button
          className="w-10 aspect-square rounded-full bg-red text-white absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer z-50"
          onClick={slideNext}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <button
          className="w-10 aspect-square rounded-full bg-red text-white absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer z-50"
          onClick={slidePrev}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Swiper>
      <FontAwesomeIcon
        icon={faQuoteLeft}
        className="absolute text-[10rem] text-red opacity-40 left-32 top-32 tab:left-16 tab:text-[8rem]"
      />
      <FontAwesomeIcon
        icon={faQuoteRight}
        className="absolute text-[10rem] text-red opacity-40 right-24 bottom-24 tab:right-10 tab:text-[8rem]"
      />
    </Section>
  );
};

export default Testimonials;
