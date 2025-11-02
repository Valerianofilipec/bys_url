import Hashids from "hashids";

const salt = process.env.HASHID_SALT
/**
 * Default alphabet [a-z,A-Z,0-9]
 * Hashids(salt, length, alphabet)
 */
export const hash_id = new Hashids(salt)
