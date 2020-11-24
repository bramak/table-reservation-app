import {TABLE_RESERVED_INCART,ADD_TO_CART,REMOVE_ITEM} from "../actions";

const initialState = {
    Items : [],
  };

  function cartItems(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART: {
        return {
          
        };
      }
      case REMOVE_ITEM: {
          return{

          }
      }
      
      default:
        return state;
    }
  }
  
  export default cartItems;