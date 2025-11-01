import { Router } from "express";
import { url_router } from "./url.routes";


const routes = Router()

routes.use(url_router)
routes.get('/health', (req, res) => {
	res.status(200).end()
})

export { routes };
