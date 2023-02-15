import SectionHeading from "../../Common/SectionHeading";
import { Section } from "../../StyledComponents/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { Button } from "../../StyledComponents/Button";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../../AppContext";
import { Swiper as Swip } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BgTexture from "../../../public/Assets/Images/BgTexture.png";

const NewsSection = ({ news, news_headline }) => {
  let [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);
  let { isArabic } = useContext(AppContext);
  // Swiper Buttons
  // Swiper Function
  let [swiper, setSwiper] = useState<null | Swip>(null);
  const slideNext = () => {
    swiper?.slideNext();
  };
  const slidePrev = () => {
    swiper?.slidePrev();
  };

  // Update NewsSection Title/description on slideChange
  let [newsTitle, setNewsTitle] = useState(news[0].news_title);
  let [news_description, setNewsDescription] = useState(
    news[0].news_description
  );

  let changeActiveNews = () => {
    if (swiper) {
      let news_description = document.getElementById(
        "news_description"
      ) as HTMLElement;
      news_description.classList.toggle("opacity-0");
      setTimeout(() => {
        setNewsTitle(news[swiper.activeIndex].news_title);
        setNewsDescription(news[swiper.activeIndex].news_description);
      }, 330);
      setTimeout(() => {
        news_description.classList.toggle("opacity-0");
      }, 400);
    }
  };

  return (
    <Section
      className={`gap-16 overflow-hidden  before:absolute before:top-0 before:bg-darkGray before:h-1/2 mob:before:h-1/3 before:w-full before:hidden tab:before:block bg-cover bg-center`}
      style={{ backgroundImage: `url(${BgTexture.src})` }}
    >
      <SectionHeading title={news_headline} white={true} />
      <div
        className={`flex tab:flex-col items-center w-screen gap-12 tab:px-24 mob:px-6 relative after:absolute after:top-0 after:w-1/3 after:bg-darkGray after:h-[120%] tab:after:hidden after:-z-50 ${
          isArabic ? "after:right-0" : "after:left-0"
        }`}
      >
        <div
          className="relative newsSlider overflow-hidden basis-1/2 tab:w-full text-white"
          id="newsSlider"
          style={{ direction: "ltr" }}
        >
          <Swiper
            spaceBetween={0}
            slidesPerView={2}
            centeredSlides
            autoplay={true}
            onSwiper={(s) => setSwiper(s)}
            onTransitionStart={() => changeActiveNews()}
            className="gradient-mask-l-90"
          >
            {news.map(({ main_image }, i) => {
              return (
                <SwiperSlide
                  className=" w-full aspect-[1/1.2] bg-cover bg-center duration-300"
                  style={{ backgroundImage: `url(${main_image})` }}
                  key={i}
                >
                  <div className="news-image-overlay opacity-0 duration-300 absolute top-0 left-0 w-full h-full bg-darkGray" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex items-center gap-4 z-50 absolute bottom-0 left-10 text-white ">
            <button className="text-2xl" onClick={slideNext}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="text-2xl" onClick={slidePrev}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div
          className="basis-4/10 text-start flex flex-col justify-end duration-300 text-white"
          id="news_description"
        >
          <h3 className="font-bold text-3xl  mb-24  leading-10">{newsTitle}</h3>
          <div
            dangerouslySetInnerHTML={{ __html: news_description }}
            className="mb-20 text-xl leading-10"
          />
          <Link href={"/news"} className="tab:mx-auto mob:scale-125">
            <Button bgColor="white" textColor="red">
              {isArabic ? "اكتشف المزيد" : "Explore More"}
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default NewsSection;
