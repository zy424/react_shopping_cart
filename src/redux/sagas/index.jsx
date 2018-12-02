import {all} from "redux-saga/effects"
import watchUserAsync from "app/redux/sagas/UserSaga"

export default function* rootSaga() {
  yield all([
    watchUserAsync(),
  ])
}
