import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import AppContext from "../../../AppContext";

const Landing = ({ landing_headline, price, rating, cover_image }) => {
  let { isArabic } = useContext(AppContext);
  return (
    <div
      className="relative h-80vh tab:h-60vh flex flex-col items-start tab:items-center justify-around px-20 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${cover_image})` }}
    >
      <span className="absolute top-0 left-0 w-full h-full bg-black opacity-70 gradient-mask-r-0" />
      <span className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
      <span className="absolute top-0 left-0 w-full h-full bg-red opacity-5 z-10" />
      <div />
      <h1 className="font-bold text-5xl z-50">{landing_headline}</h1>
      <div className="relative flex tab:flex-col items-center text-4xl gap-20 tab:gap-10 z-50">
        <span
          className={`absolute top-0  -translate-y-full tab:left-1/2 tab:-translate-x-1/2 text-2xl ${
            isArabic ? "right-0" : "left-0"
          }`}
        >
          {isArabic ? "السعر" : "Price"}
        </span>
        <p className="">{price}</p>
        <div className="flex items-center gap-3 text-xl">
          {Array(rating)
            .fill(1)
            .map((i) => {
              return <FontAwesomeIcon icon={faStar} key={i} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Landing;
