"use client";
import { formatter } from "@/lib/utils";
import React, { useState } from "react";
interface CurrencyProps {
  value?: string | null;

}
const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div className="font-semibold">
      {value && formatter.format(Number(value))}
      {!value && "No price has been provided."}
    </div>
  );
};

export default Currency;
