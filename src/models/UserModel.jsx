import Model from "app/models/Model"

export default class UserModel extends Model {
  constructor(data = {}) {
    super({
      images: [],
      name: '',
      description: '',
      price: 0.0,
      ...data,
    })
  }
}