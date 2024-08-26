import EventEmitter from 'node:events'
import mongoose from 'mongoose'

export async function bootstrap(): Promise<void> {
    const eventEmitter = new EventEmitter()

    try {
        await mongoose.connect('mongodb://localhost:27017/test')
    } catch (error) {
        console.error('mongo connection failed', error)
        throw error
    }

    console.info('Connected to MongoDB')

    return Promise.resolve()
}
