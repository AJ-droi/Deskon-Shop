import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],
  total: 0,

  addToCart: (product) => {
    set((state) => {
      let isItemExisting = state.cart.find((item) => item._id === product._id);

      if (!isItemExisting) {
        const updatedCart = [...state.cart, { ...product, quantity: 1 }];
        const updatedTotal = updatedCart.reduce(
          (acc, item) => acc + parseFloat(item.price) * item.quantity,
          0
        );

        return { cart: updatedCart, total: updatedTotal };
      }

      return state;
    });
  },

  removeFromCart: (product) => {
    set((state) => {
      
        const updatedCart = state.cart.filter((item) => item._id !== product._id)

        const updatedTotal = updatedCart.reduce(
          (acc, item) => acc + parseFloat(item.price) * item.quantity,
          0
        );

        return { cart: updatedCart, total: updatedTotal };
    })
  },

  changeQuantity: (product, change = 1) => {
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      );

      const updatedTotal = updatedCart.reduce(
        (acc, item) => acc + parseFloat(item.price) * item.quantity,
        0
      );

      return { cart: updatedCart, total: updatedTotal };
    });
  },

  getCart: () => get(),
}));

export default useCartStore;
