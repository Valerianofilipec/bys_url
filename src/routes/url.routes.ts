import { Router } from "express";
import url_controller from "../controllers/url.controller";

const url_router = Router()

//	info: in future will use differents domains
//	e.g. for post url (url.valerianofc.codes/) ans get url (bys.codes/xxxxx)
url_router.post('/', url_controller.createShortURL)

url_router.get('/:short_url', url_controller.getLongURL)

export { url_router };
