import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      // Ürün zaten sepette varsa, mevcut ürünü ve indeksini alın
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      // Ürün zaten sepetteyse, miktarını artırın
      if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingCartItemIndex] = {
          ...updatedCartItems[existingCartItemIndex],
          quantity: updatedCartItems[existingCartItemIndex].quantity + 1,
        };

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }

      // Ürün sepette değilse, ürünü sepete ekleyin ve miktarını 1 olarak ayarlayın
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
