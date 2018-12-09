import {all} from "redux-saga/effects"
import watchProductAsync from "app/redux/sagas/ProductSaga"

export default function* rootSaga() {
  yield all([
    watchProductAsync(),
  ])
}
