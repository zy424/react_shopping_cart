import Model from "app/models/Model"

export default class UserModel extends Model {
  constructor(data = {}) {
    super({
      url: '',
      avatarUrl: '',
      name: '',
      score: 0.0,
      ...data,
    })
  }
}