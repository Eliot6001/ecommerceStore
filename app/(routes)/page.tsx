import Container from "@/components/ui/Container";
import React from "react";

import BillBoard from "@/components/billboard";
import { getBillboard } from "@/actions/getBillboards";
import { getProducts } from "@/actions/getProducts";
import ProductList from "@/components/ui/productList";

export const revalidate = 0;
const HelloStore = async () => {
  const billboard = await getBillboard("404614c8-278a-4a65-a449-868313bc8d63");
  
  const Products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        {/**@ts-ignore */}
        <BillBoard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={Products} />
        </div>
      </div>
    </Container>
  );
};

export default HelloStore;
