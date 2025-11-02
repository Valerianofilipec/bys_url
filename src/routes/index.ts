import { Router } from "express";
import { url_router } from "./url.routes";


const routes = Router()

routes.get('/health', (req, res) => {
	res.status(200).end()
})
routes.use(url_router)

export { routes };
