export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (product: any) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
