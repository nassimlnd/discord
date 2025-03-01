import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      username: 'nassim',
      displayName: 'Nassim',
      email: 'nassim@mail.com',
      password: 'password',
    })
  }
}
