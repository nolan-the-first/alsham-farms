import { Section } from "../../StyledComponents/Section";
import { useContext } from "react";
import AppContext from "../../../AppContext";
import { Button } from "../../StyledComponents/Button";
import Image from "next/image";
import SectionHeading from "../../Common/SectionHeading";
import plant1 from "../../../public/Assets/Images/Plant1.png";
import Link from "next/link";

const About = ({
  about_us_healdine,
  about_us_text,
  about_us_title,
  about_us_image_1,
  about_us_image_2,
}) => {
  let { screenWidth, isArabic } = useContext(AppContext);
  return (
    <Section
      direction={screenWidth > 768 ? `row-reverse` : "column"}
      items="stretch"
      id="about"
      className="overflow-hidden justify-center gap-32"
    >
      <div className="relative basis-1/2 w-1/2 flex items-center  tab:aspect-[2/1.2]">
        <div
          className="relative bg-cover aspect-[1/1.3] bg-center bg-orange w-full basis-1/2 z-10 scale-125 max-w-xs"
          style={{ backgroundImage: `url(${about_us_image_1})` }}
        />
        <div
          className="relative bg-cover aspect-[1/1.3] bg-center bg-orange w-full basis-1/2"
          style={{ backgroundImage: `url(${about_us_image_2})` }}
        />
      </div>
      <div
        className={`flex flex-col text-start tab:text-center justify-between tab:items-center tab:px-0 basis-1/2 font-bold `}
      >
        <SectionHeading title={about_us_healdine} />
        <h3 className="text-5xl mb-16">{about_us_title}</h3>
        <div
          className="relative text-start text-lg mb-16"
          dangerouslySetInnerHTML={{ __html: about_us_text }}
        />
        <Link href={"/#menu"}>
          <Button bgColor="red" textColor="white">
            {isArabic ? "القائمة" : "Our Menu"}
          </Button>
        </Link>
      </div>
      <Image
        src={plant1.src}
        alt=""
        width={1000}
        height={1000}
        className="absolute bottom-0 left-0 -z-10 w-40 h-auto"
      />
    </Section>
  );
};

export default About;
