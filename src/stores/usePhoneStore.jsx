import { create } from "zustand";

const usePhoneStore = create((set) => ({
  phoneBook: [],
  addContact: (name, phoneNumber) =>
    set((state) => ({
      phoneBook: [...state.phoneBook, { id: Date.now(), name, phoneNumber }],
    })),
  filterBook: [],
  addFilter: (filterList) =>
    set(() => ({
      filterBook: [...filterList],
    })),
}));

export default usePhoneStore;