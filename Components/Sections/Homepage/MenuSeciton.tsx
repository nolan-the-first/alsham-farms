import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../../Common/SectionHeading";
import { Section } from "../../StyledComponents/Section";

const MenuSeciton = ({ our_menu_headline, foodCategories }) => {
  return (
    <Section id="menu">
      <SectionHeading title={our_menu_headline} />
      <div className="grid grid-cols-6 tab:gird-cols-3 mob:grid-cols-2 gap-10 w-full ">
        {foodCategories.map((category, i) => {
          return (
            <Link
              href={{
                pathname: "products/",
                query: {
                  category: category.name,
                },
              }}
              className="group flex-col w-full relative aspect-square flex items-center justify-center gap-4 bg-white hover:bg-red duration-300 shadow-xl p-12  rounded-xl"
              key={i}
            >
              <Image
                src={category.icon}
                alt=""
                width={1000}
                height={1000}
                className="h-full"
              />
              <p className="text-3xl font-semibold group-hover:text-white duration-200">
                {category.name}
              </p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

export default MenuSeciton;
