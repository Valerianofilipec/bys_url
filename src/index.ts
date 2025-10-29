import 'dotenv/config'
import express from 'express'

const app = express()
const port = process.env.SERVER_PORT || 8080

app.get('/health', (req, res) => {
	res.status(200).end()
})

app.listen(port, () =>{
	console.log(`BYS_url shortner app listening on port: ${port}`)
})
