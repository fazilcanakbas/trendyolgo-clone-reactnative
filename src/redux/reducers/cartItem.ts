const initialState = {
  cartItems: [], // Sepetteki ürünler
};

const cartReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload], // Yeni ürünü sepete ekle
      };

    // case "REMOVE_FROM_CART":
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.filter(item => item._id !== action.payload), // Ürünü sepetten çıkar
    //   };

    default:
      return state;
  }
};

export default cartReducer;
