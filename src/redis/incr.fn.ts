import { createClient } from 'redis';
import { url } from "../env";

const incr_client = createClient({
  socket: {
    connectTimeout: 10000 // in milliseconds
  },
  disableOfflineQueue: true,
  url,
});
// Always ensure there's a listener for errors in the client to prevent process crashes due to unhandled errors
incr_client.on('error', error => {
    console.error(`Redis client error:`, error);
});

export { incr_client };
