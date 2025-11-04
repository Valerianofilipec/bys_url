import { Request, Response } from "express";
import { db } from "../database/db.connect";
import { base_url } from "../env";
import { incr_client } from "../redis/incr.connect";
import { hash_id } from '../utils/hashid';


export default{
	/**
	 *
	 * @param req 'bys.codes/xxxxx'
	 * @param res 301 'LongURL'
	 */
	async getLongURL(req: Request, res :Response){
		const {short_url} = req.params

		try {
			const query = 'SELECT long_url FROM url WHERE shortcode = ?'
			const result = await db.execute(query, [short_url])
			if(result && result.rowLength > 0)
				return res.redirect(301, result.rows[0].long_url)
			return res.status(404).end()
		} catch (error) {
			return res.status(500).end()
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
			const incr_number = await incr_client.incr("url_id")
			if(!incr_number)
				throw new Error("Redis failled")
			const short_url = hash_id.encode(incr_number)

			const query = 'INSERT INTO url (shortcode, long_url, created_at) VALUES (?,?,toTimeStamp(now()))'
			const result = await db.execute(query, [short_url, url])
			if(!result)
				throw new Error('fail to execute query to the cassandra')
			return res.status(201).send({short_url: base_url+short_url})
		} catch (error) {
			return res.status(500).end()
		}
	}
}
