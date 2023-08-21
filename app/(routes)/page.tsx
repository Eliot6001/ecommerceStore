import Container from "@/components/ui/Container";
import React from "react";

import BillBoard from "@/components/billboard";
import { getBillboard } from "@/actions/getBillboards";
import { getProducts } from "@/actions/getProducts";
import ProductList from "@/components/ui/productList";

export const revalidate = 0;
const HelloStore = async () => {
  const billboard = await getBillboard("504650cf-9d71-40a1-8b75-97989aa6da33");
  const Products = await getProducts({ isFeatured: true });
  if(typeof billboard !== 'object') return null;
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillBoard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={Products} />
        </div>
      </div>
    </Container>
  );
};

export default HelloStore;
