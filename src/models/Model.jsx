import get from 'lodash/get'
import set from 'lodash/set'

export default class Model {
  constructor(data) {
    Object.entries(data).map(([key, val]) => this.setAttribute(key, val))
  }

  getAttribute(key, defaultValue) {
    return get(this, key, defaultValue)
  }

  setAttribute(key, val) {
    return set(this, key, val)
  }
}