import express from 'express'

import { registerRouter } from './register.router'

export const router = express.Router()

router.use('auth', registerRouter)
