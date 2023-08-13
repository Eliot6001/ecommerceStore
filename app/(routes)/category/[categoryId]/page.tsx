export const revalidate = 0;
import getColors from "@/actions/getColors";
import { getProducts } from "@/actions/getProducts";
import getSizes from "@/actions/getSizes";
import getCategory from "@/actions/getCategory";
import React from "react";
import Container from "@/components/ui/Container";
import BillBoard from "@/components/billboard";
import ProductCard from "@/components/ui/ProductCard";
import Filter from "../components/Filter";
import MobileFilters from "../components/MobileFilters";

import NoResults from "@/components/ui/noResults";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}
const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const Sizes = await getSizes();
  const Colors = await getColors();
  const Category = await getCategory(params.categoryId);

  return (
    <div className="bg-white ">
      <Container>
        <BillBoard data={Category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={Sizes} colors={Colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={Sizes} />
              <Filter valueKey="colorId" name="Colors" data={Colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
