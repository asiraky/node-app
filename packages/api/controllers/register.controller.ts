import type { Request, Response } from 'express'

export const register = (_: Request, res: Response) => {
    res.status(201).send('Registering user')
}

export const registerOAuth = (_: Request, res: Response) => {
    res.status(201).send('Registering oauth user')
}
