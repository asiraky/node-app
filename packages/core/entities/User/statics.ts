import type { UserDoc } from './interfaces'
import type { UserSchema } from './schema'

export function registerStaticMethods(schema: UserSchema) {
    schema.statics.registerUser = function (obj: UserDoc) {
        return this.create(obj)
    }

    schema.statics.isEmailTaken = async function (email: string, excludeUserId: string) {
        return (await this.findOne({ email, _id: { $ne: excludeUserId } })) !== null
    }
}
