'use strict'
const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['matricula', 'nome', 'email', 'password', 'perfil'])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
