"use strict"

const User = use("App/Models/User")

class UserController {
  async create ({ request }) {
    const data = request.only(["username", "email", "password"])

    const user = await User.create(data)

    return user
  }
  async index () {
    const users = User.all()
  
    return users
  }
}

module.exports = UserController