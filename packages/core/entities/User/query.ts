import { QueryWithHelpers } from 'mongoose'

import type { HydratedUserDocument, UserQueryHelpers } from './interfaces'
import type { UserSchema } from './schema'

export function registerQueries(schema: UserSchema) {
    schema.query.byEmailDomain = function (
        this: QueryWithHelpers<any, HydratedUserDocument, UserQueryHelpers>,
        domain: string,
    ) {
        return this.find({ email: new RegExp(`@${domain}$`, 'i') })
    }
}
