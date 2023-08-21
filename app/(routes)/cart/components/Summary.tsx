"use effect";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import {useEffect} from 'react'
import Button from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";
import useCart,{CartStore} from "@/hooks/useCart";
import { toast } from "react-hot-toast";

const Summary = () => {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const isEmpty = items.length === 0;
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed");
        removeAll();
    }
    if (searchParams.get("canceled")) {
        toast.error("Payment failed");
          
      }
  }, [searchParams, removeAll]);
  const totalPrice = items.reduce((accumulator: number, currentItem: { price: string; }) => {
    return accumulator + Number(currentItem.price);
  }, 0);
  const onCheckOut = async () => {
    
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item: any) => item.id),
      }
    );
    window.location = res.data.url;
  };
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:col-span-5 lg:mt-0 lg:p-8 ">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          {items.length !== 0 && <Currency value={String(totalPrice)} />}
        </div>
      </div>
      <Button className="w-full mt-6" disabled={isEmpty} onClick={onCheckOut} >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
