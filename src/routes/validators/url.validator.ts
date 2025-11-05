import { NextFunction, Request, Response } from "express";
import { body, param, validationResult } from "express-validator";

const v_shorturl = [
	param('short_url').notEmpty().isAlphanumeric()
		.isLength({min:3, max:7})
]

const v_url = [
	body('url').notEmpty().isURL({ignore_max_length:false})
]

function validate_req(req:Request, res:Response, next: NextFunction){
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	next()
}

export { v_shorturl, v_url, validate_req };
