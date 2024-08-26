import { type HydratedUserDocument, User, type UserDoc } from '@/core/entities/User'

import { ExecuteUseCase } from '../ExecuteUseCase'

type ExecuteRegisterUseCase = ExecuteUseCase<UserDoc, HydratedUserDocument>

export const registerUseCase: ExecuteRegisterUseCase = async (input) => {
    const user = await User.create({
        email: input.email,
        password: input.password,
        firstName: input.firstName,
        lastName: input.lastName,
    })

    // raise event

    return user
}
