import { Client } from "cassandra-driver";
import 'dotenv/config';

const localDataCenter = process.env.CASSANDRA_DATA_CENTER || 'datacenter1'
const keyspace = process.env.CASSANDRA_KEYSPACE || 'bys_url'
const username = process.env.CASSANDRA_USER || 'bys'
const password = process.env.CASSANDRA_PASSWORD || ''
const contactPoints = [process.env.CASSANDRA_HOST || 'localhost']

export const db = new Client({
	contactPoints,
	credentials: {
		username,
		password
	},
  localDataCenter,
  keyspace,
})
