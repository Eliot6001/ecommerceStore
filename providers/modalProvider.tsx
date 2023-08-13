"use client"

import PreviewModal from "@/components/ui/previewModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        if (!isMounted) setIsMounted(true);
    }, [])
    if(!isMounted){ return null }
    return ( 
    <>
    <PreviewModal/>
    </>
  )
}

export default ModalProvider