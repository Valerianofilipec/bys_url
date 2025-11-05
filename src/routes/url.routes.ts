import { Router } from "express";
import url_controller from "../controllers/url.controller";
import { v_shorturl, v_url, validate_req } from "./validators/url.validator";

const url_router = Router()

//	info: in future will use differents domains
//	e.g. for post url (url.valerianofc.codes/) ans get url (bys.codes/xxxxx)
url_router.post('/',v_url, validate_req, url_controller.createShortURL)

url_router.get('/:short_url',v_shorturl, validate_req, url_controller.getLongURL)

export { url_router };
