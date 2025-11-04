import 'dotenv/config';

export const
	salt = process.env.HASHID_SALT,
	base_url = process.env.SHORT_URL_HOST || 'http://localhost:3000/',
	localDataCenter = process.env.CASSANDRA_DATA_CENTER || 'datacenter1',
	keyspace = process.env.CASSANDRA_KEYSPACE || 'bys_url',
	username = process.env.CASSANDRA_USER || 'bys',
	password = process.env.CASSANDRA_PASSWORD || '',
	contactPoints = [process.env.CASSANDRA_HOST || 'localhost'],
	url = process.env.INCR_URL,
	port = process.env.SERVER_PORT
