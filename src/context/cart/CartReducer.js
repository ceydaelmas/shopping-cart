import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  DECREASE_ITEM,
} from "../Types";

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

    case DECREASE_ITEM: {
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );

      if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        const currentQuantity =
          updatedCartItems[existingCartItemIndex].quantity;

        if (currentQuantity > 1) {
          updatedCartItems[existingCartItemIndex] = {
            ...updatedCartItems[existingCartItemIndex],
            quantity: currentQuantity - 1,
          };
        } else {
          updatedCartItems.splice(existingCartItemIndex, 1);
        }

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
      return state;
    }

    default:
      return state;
  }
};

export default CartReducer;
