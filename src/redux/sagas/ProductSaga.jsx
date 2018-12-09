import {
  put,
  take,
  call,
} from 'redux-saga/effects'
import ProductAction from "app/redux/actions/ProductAction"
import ProductService from "app/services/ProductService"

export function* getProduct() {
  try {
    const payload = yield call(ProductService.get)

    yield put({
      type: ProductAction.PRODUCT_GOT,
      payload,
    })
  } catch (payload) {
    console.log(payload)
    yield put({type: ProductAction.PRODUCT_GOT_FAILED, payload})
  }
}

export default function* watchProductAsync() {
  while (true) {
    const {type, payload} = yield take([
      ProductAction.PRODUCT_GET,
    ])

    switch (type) {
      case ProductAction.PRODUCT_GET:
        yield call(getProduct, payload)
        break
    }
  }
}
