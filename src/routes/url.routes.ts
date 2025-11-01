import { Router } from "express";

const url_router = Router()

//	info: in future will use differents domains
//	e.g. for post url (url.valerianofc.codes/) ans get url (bys.codes/xxxxx)
url_router.post('/', (req, res)=>{
	const data = req.body
	console.log(`received url = ${data.url}`)
	res.sendStatus(201)
})

url_router.get('/', (req, res)=>{
	console.log("get short url")
	res.redirect(301, 'https://valerianofc.codes')
})

export { url_router };
