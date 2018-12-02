import UserAction from "app/redux/actions/UserAction"

export default function userReducer(state = {
  isLoading: false,
  searchName: '',
  users: [],
}, action) {
    switch (action.type) {
      case UserAction.USER_GOT:
        return {
          ...state,
          isLoading: false,
          users: action.payload,
        }
      case UserAction.USER_LOADING:
        return {
          ...state,
          isLoading: true,
        }
        case UserAction.SEARCH_NAME_CHANGED:
          return {
            ...state,
            searchName: action.payload,
          }
        default:
            return state
    }
}
