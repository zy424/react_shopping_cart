import {
  put,
  take,
  call,
} from 'redux-saga/effects'
import UserAction from "app/redux/actions/UserAction"
import UserService from "app/services/UserService"

export function* getUser(searchName) {
  try {
    yield put({
      type: UserAction.USER_LOADING, undefined,
    })
    const payload = yield call(UserService.get, searchName)

    yield put({
      type: UserAction.USER_GOT,
      payload,
    })
  } catch (payload) {
    console.log(payload)
    yield put({type: UserAction.USER_GOT_FAILED, payload})
  }
}

export default function* watchUserAsync() {
  while (true) {
    const {type, payload} = yield take([
      UserAction.USER_GET,
    ])

    switch (type) {
      case UserAction.USER_GET:
        yield call(getUser, payload)
        break
    }
  }
}
