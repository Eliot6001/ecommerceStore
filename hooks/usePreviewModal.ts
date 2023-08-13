import { create } from "zustand";

import { Product } from "@/types";

interface previewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}


const usePreviewModal = create<previewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
