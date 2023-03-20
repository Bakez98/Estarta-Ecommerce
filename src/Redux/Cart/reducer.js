import * as CART_CONSTANTS from "./constants"

const initState = {
    cartItems: []
}


 function cartReducer(state = initState, action){
    switch (action.type) {
        case CART_CONSTANTS.ADD_TO_CART:
          const IsItemFound = state.cartItems?.find(
            (item) => item.id === action.payload.id
          );
    
          if (IsItemFound) {
            const ItemToBeAdded = state.cartItems.map((item) => {
              if (item.id === action.payload.id) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                return item;
              }
            });
    
            return {
              cartItems: ItemToBeAdded,
            };
          } else {
            return {
              cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
            };
          }
        default:
            return state;
    }
}

export default cartReducer;