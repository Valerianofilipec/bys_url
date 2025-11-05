import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { port } from './env'
import { incr_client } from './redis/incr.connect'
import { routes } from "./routes/index"

const app = express()

try {
	//synchronous fn
	incr_client.connect()
} catch (error) {
	//gracefull shutdown/restart or just f* it
	console.log(error)
}

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(routes)

app.listen(port, () =>{
	console.log(`BYS_url shortner app listening on port: ${port}`)
})
