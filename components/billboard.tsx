import React from "react";
import { Billboard as billboardType } from "@/types";

interface BillboardProps {
  data: billboardType
};
const BillBoard: React.FC<BillboardProps> = ( {data} ) => {
  console.log(data, "data is here")
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden ">
      <div
        style={{ backgroundImage: `url(${data.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.2/1] overflow-hidden bg-cover object-contain"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
