import { ProductDTO } from "@/lib/types";

const CART_STORAGE_KEY = "cartData";

export const cartReducers = (state: any, action: any) => {
  switch (action.type) {
    case "SET_CART":
      const data = Object.values(action.payload);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(data));
      return data;

    case "ADD_TO_CART":
      const existingProduct = state.find(
        (element: any) => element.product.id === action.payload.id
      );

      if (existingProduct) {
        const updatedState = state.map((item: any) =>
          item.product.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedState));
        return updatedState;
      } else {
        const newProduct = { product: action.payload, quantity: 1 };
        const updatedState = [...state, newProduct];

        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedState));
        return updatedState;
      }

    case "DECREASE_QUANTITY":
      const productIndex = state.findIndex(
        (item: any) => item.product.id === action.payload
      );

      if (productIndex !== -1) {
        const product = state[productIndex];

        if (product.quantity === 1) {
          const newList = [
            ...state.slice(0, productIndex),
            ...state.slice(productIndex + 1),
          ];
          state = newList;
        } else {
          const newList = state.map((item: any, index: number) =>
            index === productIndex
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
          state = newList;
        }
      }

      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
      return state;

    case "CLEAR_CART":
      localStorage.removeItem(CART_STORAGE_KEY);
      return [];

    default:
      return state;
  }
};
