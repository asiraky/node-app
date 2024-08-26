import { HydratedDocument, type Model, QueryWithHelpers } from 'mongoose'

export interface UserDoc {
    email: string
    password: string
    firstName: string
    lastName: string
}

export type HydratedUserDocument = HydratedDocument<UserDoc>

export interface UserModel extends Model<UserDoc, UserQueryHelpers, UserInstanceMethods> {
    registerUser(obj: UserDoc): Promise<UserDoc>
    isEmailTaken(email: string, excludeUserId: string): Promise<boolean>
}

export interface UserInstanceMethods {
    getFullName(): string
    isPasswordMatch(password: string): Promise<boolean>
}

export interface UserQueryHelpers {
    byEmailDomain(
        domain: string,
    ): QueryWithHelpers<HydratedUserDocument[], HydratedUserDocument, UserQueryHelpers>
}
