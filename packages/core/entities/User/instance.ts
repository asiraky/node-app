import bcrypt from 'bcryptjs'

import type { UserSchema } from './schema'

export function registerInstanceMethods(schema: UserSchema) {
    schema.methods.isPasswordMatch = function (password: string) {
        return bcrypt.compare(password, this.password)
    }
}
