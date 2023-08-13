"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";
import {
  ShoppingBag,
  ShoppingBagIcon,
  ShoppingBasket,
  ShoppingCartIcon,
} from "lucide-react";
import useCart from "@/hooks/useCart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  React.useEffect(() => {setIsMounted(true)}, [])
  const Router = useRouter();
  const cart = useCart();
  
  
  if(!isMounted) return null
    return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => Router.push('/cart')}
      className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBasket size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
