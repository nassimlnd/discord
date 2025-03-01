import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async login({ request, response, auth }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const user = await User.verifyCredentials(email, password)

      if (user) {
        await auth.use('web').login(user)
        return response.noContent()
      }
    } catch (error) {
      return response.badRequest('Identifiants invalides')
    }
  }

  public async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.noContent()
  }

  public async me({ auth, response }: HttpContext) {
    const user = auth.use('web').user

    if (!user) {
      return response.unauthorized('Non authentifié')
    }

    return response.json(user)
  }
}
