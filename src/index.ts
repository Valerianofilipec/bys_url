import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import { routes } from "./routes/index"

const app = express()
const port = process.env.SERVER_PORT

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () =>{
	console.log(`BYS_url shortner app listening on port: ${port}`)
})
