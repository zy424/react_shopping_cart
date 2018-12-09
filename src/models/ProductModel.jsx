import Model from "app/models/Model"

export default class ProductModel extends Model {
  constructor(data = {}) {
    super({
      name: '',
      description: '',
      price: 0.0,
      images: [],
      ...data,
    })
  }
}