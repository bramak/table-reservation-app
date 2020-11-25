import {TABLE_RESERVED_INCART,ADD_TO_CART,REMOVE_ITEM} from "../actions";


const initialState = {
    Items : [],
    numberOfReservations: 0,
  };

  function cartItems(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART: {
        let Item=action.id
        let numberOfRes = state.numberOfReservations + 1 
        let alreadyReserved= state.Items.includes(Item)
        console.log(alreadyReserved)
         if(alreadyReserved){
           return{
          ...state,
        }
      }
        else
        return {
          ...state,
          Items: [...state.Items, Item],
          numberOfReservations: numberOfRes,
        }
      }
      case REMOVE_ITEM: {
          return{
            ...state,
          }
      }
      
      default:
        return state;
    }
  }
  
  export default cartItems;