import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],
  total: 0,

  addToCart: (product) => {
    set((state) => {
      const updatedCart = [...state.cart, product];
      const updatedTotal = updatedCart.reduce(
        (acc, item) => acc + parseInt(item.price),
        0
      );

      return { cart: updatedCart, total: updatedTotal };
    });
  },

  getCart: () => {
    return {
      cart: get().cart,
      total: get().total
    }
  }
}));

export default useCartStore;
