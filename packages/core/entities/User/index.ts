import { model } from 'mongoose'

import { registerHooks } from './hooks'
import { registerInstanceMethods } from './instance'
import type { UserDoc, UserModel } from './interfaces'
import { registerQueries } from './query'
import { userSchema } from './schema'
import { registerStaticMethods } from './statics'

registerStaticMethods(userSchema)
registerInstanceMethods(userSchema)
registerQueries(userSchema)
registerHooks(userSchema)

export const User: UserModel = model<UserDoc, UserModel>('User', userSchema)

export * from './interfaces'
