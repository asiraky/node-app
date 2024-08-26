import app from './app'
import { bootstrap } from './bootstrap'

const PORT = 3000

try {
    await bootstrap()

    const server = app.listen(PORT, () => {
        console.info(`Listening to port ${PORT}`)
    })

    const exitHandler = () => {
        server.close(() => {
            console.info('Server closed')
            process.exit(1)
        })
    }

    const unexpectedErrorHandler = (error: unknown) => {
        console.error(error)
        exitHandler()
    }

    process.on('uncaughtException', unexpectedErrorHandler)
    process.on('unhandledRejection', unexpectedErrorHandler)

    process.on('SIGTERM', () => {
        console.info('SIGTERM received')
        server.close()
    })
} catch (error: unknown) {
    console.error(error)
    process.exit(1)
}
