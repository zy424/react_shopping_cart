import HttpClient from "app/components/HttpClient";
import UserModel from "app/models/UserModel";
import axios from "axios";

export default class UserService {

  static get(searchName) {

    // const url = `https://api.github.com/search/users?q=${searchName}`
    // axios.get(url)
    //   .then(response => {
    //     //得到响应数据
    //     const result = response.data
    //     console.log(result)
    //     return result.items.map(item => (
    //       UserModel({
    //         name: item.login,
    //         url: item.html_url,
    //         avatarUrl: item.avatar_url,
    //         score: item.score,
    //       })
    //     ))
    //   })

    return HttpClient.get(
      `search/users?q=${searchName}`,
    ).then((res) => {
      const result = res.data;
      return result.items.map(item => (
        new UserModel({
          name: item.login,
          url: item.html_url,
          avatarUrl: item.avatar_url,
          score: item.score,
        })
      ))
    })
  }
}