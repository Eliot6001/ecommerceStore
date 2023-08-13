import { getProduct } from "@/actions/getProduct";
import { getProducts } from "@/actions/getProducts";
import Container from "@/components/ui/Container";

import Gallery from "@/components/ui/Gallery";
import Info from "@/components/ui/Info";


import ProductList from "@/components/ui/productList";
import React from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}
const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const getProductData = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: getProductData?.Category?.id,
  });
  return (
  <div className="bg-white">
    <Container>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div>
            <Gallery images={getProductData.images}/>
          </div>
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info data={getProductData}/>
          </div>
        </div>
        <hr className="my-10"/>
        <ProductList title="Related Items" items={suggestedProducts}>
          
        </ProductList>
      </div>
    </Container>
    </div>);
};

export default ProductPage;
