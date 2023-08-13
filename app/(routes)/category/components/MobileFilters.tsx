"use client";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/iconButton";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import Filter from "./Filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

function MobileFilters({ sizes, colors }: MobileFiltersProps) {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        Filters <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        className="relative z-40 lg:hidden "
        onClose={onClose}
      >
        {/* bg */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        {/* position of dialog */}
        <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl ">
                {/* close btn */}
                <div className="flex items-center justify-end px-4">
                    <IconButton icon={<X size={15} onClick={onClose} className=""/>} className=""/>
                </div>
                <div className="p-4">
                    <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                    <Filter valueKey="colorId" name="Colors" data={colors} />
                </div>
            </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
export default MobileFilters;
