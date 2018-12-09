import CartAction from "app/redux/actions/CartAction";

export default function cartReducer(state = {
  count: 0,
}, action){
  switch (action.type) {
    case CartAction.ADD_PRODUCT:
      return {count: state.count + 1}
    case CartAction.REMOVE_PRODUCT:
      let count = state.count - 1
      return {count}
    default:
      return state
  }
}