import React, { useContext, useEffect, useState } from "react";
import { Section } from "../../StyledComponents/Section";
import ProductCard from "../../Cards/ProductCard";
import { Product } from "../../../public/Assets/Types/types";
import { Button } from "../../StyledComponents/Button";
import AppContext from "../../../AppContext";
import { useRouter } from "next/router";

const ProductsSection = ({ categories, products }) => {
  // isArabic Context
  let { isArabic } = useContext(AppContext);
  // Projects Grid Logic
  let [productsInfo, setProductsInfo] = useState<Product[]>(null);
  let [productsIsShown, setProductsIsShown] = useState<boolean>(false);
  // Show 5 products Only
  useEffect(() => {
    let initialProducts = [];
    for (let i = 0; i < 6; i++) {
      if (products[i]) {
        initialProducts.push(products[i]);
      }
    }
    setProductsInfo(initialProducts);
    setProductsIsShown(false);
  }, [products]);

  let showMoreProducts = () => {
    // If All Projects Shown => set reached state to true
    if (productsIsShown) {
      // if products shown and button clicked show 5 products only
      let initialProducts = [];
      for (let i = 0; i < 6; i++) {
        if (activeFilter == "") {
          if (products[i]) {
            initialProducts.push(products[i]);
          }
        } else {
          if (products[i].categories) {
            products[i].categories.forEach((category) => {
              if (category == activeFilter) {
                initialProducts.push(products[i]);
              }
            });
          }
        }
      }
      setProductsIsShown(false);
      setProductsInfo(initialProducts);
      return;
    }
    // Add Three Projects
    let newProducts: Product[] = [...productsInfo];
    // Add 3 products if there is no filter
    if (activeFilter == "") {
      let newProductsSize = newProducts.length + 3;
      newProducts = [];
      // If there is no category, add the next 3 products (disregarding their categories)
      for (let i = 0; i < products.length; i++) {
        if (products[i]) {
          newProducts.push(products[i]);
        }
        // Check if the new Projects length is equal to the desired new length
        if (newProducts.length == newProductsSize) {
          setProductsInfo(newProducts);
          if (i == products.length - 1) {
            setProductsIsShown(true);
          }
          break;
        }
      }
      // Add 3 products if there is a filter
    } else {
      let newProductsSize = newProducts.length + 3;
      newProducts = [];
      for (let i = 0; i < products.length; i++) {
        if (products[i]) {
          // Check the project category with the active category before adding the project
          products[i].categories.forEach((category) => {
            if (category == activeFilter) {
              newProducts.push(products[i]);
            }
          });
        }
        if (newProducts.length == newProductsSize) {
          setProductsInfo(newProducts);
          break;
        }
      }
    }
    // Check if all products is shown
    if (newProducts.length >= products.length) {
      setProductsIsShown(true);
    }
    setProductsInfo(newProducts);
  };
  // Product Filter Logic
  let [activeFilter, setActiveFilter] = useState<string>("");
  function activateFilter(category: string) {
    setActiveFilter(category);
    let filterdProjects: Product[] = [];
    // Loop over all of the products
    for (let i = 0; i < products.length; i++) {
      // Check if the activated filter is found
      let filterIsFound = false;
      if (products[i].categories) {
        products[i].categories.forEach((foodCategory) => {
          if (foodCategory.name == category) {
            filterIsFound = true;
          }
        });
      }
      // if the filter is found, add the project to the products array
      if (filterIsFound || category == "") {
        filterdProjects.push(products[i]);
      }
      // if the new products == 3, break the loop and don't add another project
      if (filterdProjects.length == 3) {
        break;
      }
      if (i == products.length - 1) {
        setProductsIsShown(true);
      }
    }

    setProductsInfo(filterdProjects);
  }
  // If query param => filter
  let router = useRouter();
  useEffect(() => {
    if (typeof router.query.category == "string") {
      activateFilter(router.query.category);
    }
  }, []);
  return (
    <Section>
      {/* Start Filters */}
      <div className="flex items-center w-full mob:grid mob:grid-cols-3 gap-11 mb-24">
        <button
          className={`relative font-medium text-2xl after:absolute after:top-0 after:left-0 after:w-0 after:h-full hover:after:w-full after:rounded-sm after:duration-200 after:bg-red hover:text-white after:-z-10 ${
            activeFilter == "" ? "after:w-full text-white" : "after:w-0 "
          }`}
          onClick={() => activateFilter("")}
        >
          {isArabic ? "الكل" : "All"}
        </button>
        {categories.map(({ name }, i) => {
          return (
            <button
              className={`font-medium text-2xl relative after:absolute after:top-0 after:left-0 after:w-0 after:h-full hover:after:w-full after:rounded-sm after:duration-200 after:bg-red hover:text-white after:-z-10 ${
                name == activeFilter ? "after:w-full text-white" : " after:w-0"
              }`}
              onClick={() => activateFilter(name)}
              key={i}
            >
              {name}
            </button>
          );
        })}
      </div>
      {/* End Filters */}
      {/* Start Projects */}
      <div className="grid grid-cols-3 tab:grid-cols-2 mob:grid-cols-1 gap-8 mb-16 w-full">
        {productsInfo &&
          productsInfo.map(({ name, images, slug }, i) => {
            return (
              <ProductCard
                name={name}
                image={images[0].image}
                slug={slug}
                key={i}
              />
            );
          })}
      </div>
      {/* End Projects */}
      {/* Start Show More Button */}
      <Button
        bgColor="red"
        textColor="white"
        onClick={() => showMoreProducts()}
      >
        {isArabic
          ? productsIsShown
            ? "عرض اقل"
            : "عرض المزيد"
          : productsIsShown
          ? "Show Less"
          : "Show More"}
      </Button>
      {/* End Show More Button */}
    </Section>
  );
};

export default ProductsSection;
