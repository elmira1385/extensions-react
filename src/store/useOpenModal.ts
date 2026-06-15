import { create } from "zustand";

type ModalStore = {
  isOpen: boolean;
  selected: string | null;
  setOpen: (value: boolean) => void;
  setSelected: (id: string | null) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  selected: null,
  setOpen: (value) => set({ isOpen: value }),
  setSelected: (id) => set({ selected: id }),
}));
