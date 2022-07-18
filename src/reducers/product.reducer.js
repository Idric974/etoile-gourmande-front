import { READ_ALL_PRODUCT } from '../actions/productCRUD.action';

const initialState = {};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case READ_ALL_PRODUCT:
      return action.payload;

    default:
      return state;
  }
}
