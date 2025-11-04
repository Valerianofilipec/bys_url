import cors from 'cors'
import express from 'express'
import { port } from './env'
import { incr_client } from './redis/incr.fn'
import { routes } from "./routes/index"

const app = express()

//synchronous fn
incr_client.connect()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () =>{
	console.log(`BYS_url shortner app listening on port: ${port}`)
})
