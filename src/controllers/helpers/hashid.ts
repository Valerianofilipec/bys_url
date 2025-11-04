import Hashids from "hashids";
import { salt } from "../../env";

/**
 * Default alphabet [a-z,A-Z,0-9]
 * Hashids(salt, length, alphabet)
 */
export const hash_id = new Hashids(salt)
