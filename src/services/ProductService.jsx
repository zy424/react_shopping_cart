import HttpClient from "app/components/HttpClient"
import ProductModel from "app/models/ProductModel"


export default class ProductService {

  static get() {
    return HttpClient.get(
      `products`,
    ).then((res) => {
      const result = res.data;
      return result.map(product => (
        new ProductModel({
          name: product.name,
          description: product.description,
          price: product.price,
          images: product.images,
        })
      ))
    })
  }
}