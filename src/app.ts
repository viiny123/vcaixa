import express from 'express'
import routes from './routes/index'
import cors from 'cors'
import mongoose from 'mongoose'

export class App {
    public express: express.Application;

    constructor () {
      this.express = express()
      this.middlewares()
      this.database()
      this.routes()
      this.configureJson()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database (): void {
      mongoose.connect('mongodb://localhost:27017/dbname', {
        useNewUrlParser: true
      })
    }

    private routes (): void {
      this.express.use(routes)
    }

    private configureJson (): void {
      this.express.use(express.json())
    }
}

export default new App().express
// const app = express()
// app.use(express.json())
// app.use(routes)

// export default app
