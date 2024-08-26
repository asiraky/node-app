import { Schema } from 'mongoose'

import type { UserDoc, UserInstanceMethods, UserModel, UserQueryHelpers } from './interfaces'

export const userSchema = new Schema<UserDoc, UserModel, UserInstanceMethods, UserQueryHelpers>({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
})

export type UserSchema = typeof userSchema
