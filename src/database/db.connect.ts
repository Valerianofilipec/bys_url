import { Client } from "cassandra-driver";
import {
	contactPoints,
	keyspace,
	localDataCenter,
	password,
	username
} from "../env";

export const db = new Client({
	contactPoints,
	credentials: {
		username,
		password
	},
  localDataCenter,
  keyspace,
})
