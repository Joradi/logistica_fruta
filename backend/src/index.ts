import 'reflect-metadata'
import * as express from 'express'
import routes from './routes'
import { myDataSource } from "./app-data-source"

// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express()
app.use(express.json())

app.use('/api', routes)

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})