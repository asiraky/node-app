export type ExecuteUseCase<T, U> = (input: T) => Promise<U>
