"use client";
import React, { MouseEventHandler } from "react";
import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/iconButton";
import Currency from "@/components/ui/Currency";

import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/usePreviewModal";
import useCart from "@/hooks/useCart";

interface ProductCardProps {
  data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter()
  const previewModal = usePreviewModal();
  const cart = useCart();
  const handleClick = () => {
    router.push(`/product/${data?.id}`)
  }
  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    previewModal.onOpen(data);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    cart.addItem(data);
  };
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 " onClick={handleClick}>
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="product Image"
          src={data?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        ></Image>
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} className={"text-gray-600"} />}
              onClick={onPreview}
              className={""}
            />
            <IconButton
              icon={<ShoppingCart size={20} className={"text-gray-600"} />}
              onClick={onAddToCart}
              className={""}
            />
          </div>
        </div>
      </div>
      <div className="desc">
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data?.Category?.name}</p>
      </div>
      <div className="pric/e">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
