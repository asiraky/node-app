import { HydratedUserDocument, User } from '@/core/entities/User'

import type { ExecuteUseCase } from '../ExecuteUseCase'

type ExecuteRegisterUseCase = ExecuteUseCase<string, HydratedUserDocument[]>

export const searchUsersUseCase: ExecuteRegisterUseCase = async (input) => {
    return User.find().byEmailDomain(input)
}
