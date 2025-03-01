/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const AuthController = () => import('#controllers/auth_controller')

router.post('/login', [AuthController, 'login'])
router.post('/logout', [AuthController, 'logout'])
router.get('/me', [AuthController, 'me']).use(middleware.auth())
