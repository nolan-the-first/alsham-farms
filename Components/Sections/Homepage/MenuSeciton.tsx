import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../../Common/SectionHeading";
import { Section } from "../../StyledComponents/Section";

const MenuSeciton = ({ our_menu_headline, foodCategories }) => {
  return (
    <Section>
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
              className="w-full relative aspect-square flex items-center justify-center bg-white hover:bg-red duration-300 shadow-xl p-12 rounded-xl after:absolute after:w-6 after:top-2/3 after:left-1/3 after:aspect-square after:rounded-full after:bg-red after:opacity-40"
              key={i}
            >
              <Image
                src={category.icon}
                alt=""
                width={1000}
                height={1000}
                className="h-full"
              />
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

export default MenuSeciton;
