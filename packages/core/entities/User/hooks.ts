import bcrypt from 'bcryptjs'

import type { UserSchema } from './schema'

export function registerHooks(schema: UserSchema) {
    schema.pre('save', async function (next) {
        if (this.isModified('password')) {
            this.password = await bcrypt.hash(this.password, 8)
        }
        next()
    })
}
