import ProductAction from "app/redux/actions/ProductAction"


export default function productReducer(state = {
 products: [],},  action) {
  switch (action.type) {
    case ProductAction.PRODUCT_GOT:
      return {
        ...state,
        products: action.payload,
      }

    default:
      return state
  }
}
