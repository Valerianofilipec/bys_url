import { randomInt } from "crypto";
import { Request, Response } from "express";
import { hash_id } from './helpers/hashid';

export default{
	/**
	 *
	 * @param req 'bys.codes/xxxxx'
	 * @param res 301 'LongURL'
	 */
	async getLongURL(req: Request, res :Response){
		const id = req.params[0]

		try {
			// buscar id no cassandradb
			const url: string = "https://valerianofc.codes"
			if (!url)
				res.sendStatus(404)
			res.redirect(301, url)
		} catch (error) {
			console.log(error)
			res.sendStatus(500)
		}
	},

	/**
	 *
	 * @param req body:{"url": "https://long.url/..."}
	 * @param res 201 {"short_url": "bys.codes/xxxxxx"}
	 */
	async createShortURL(req: Request, res :Response){
		const {url} = req.body

		try {
			//get incr_number from redis
			const incr_number = randomInt(999)
			if(!incr_number)
				throw new Error("Redis failled")

			const short_url = hash_id.encode(incr_number)

			//save new shortn url to cassandradb

			res.status(201).send({short_url})
		} catch (error) {
			console.log(error)
			res.sendStatus(500)
		}
	}
}
