import { RESERVE_TABLE } from "../actions/reservation";

const initialState = {
  businessId: null, // string
  guestCount: null,
  date: null, // date object
};

function reservationReducer(state = initialState, action) {
  switch (action.type) {
    case RESERVE_TABLE: {
      return {
        ...state,
        guestCount: 1,
        businessId: action.businessId,
      };
    }
    // case ADD_GUEST: {
    //   return {
    //     ...state,
    //     guestCount: state.guestCount + 1,
    //   };
    // }
    default:
      return state;
  }
}

export default reservationReducer;
