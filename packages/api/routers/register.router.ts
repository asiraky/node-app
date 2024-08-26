import express from 'express'

import { registerController } from '../controllers'

export const registerRouter = express.Router()

registerRouter.route('register').post(registerController.register)
registerRouter.route('register-oauth').post(registerController.registerOAuth)
