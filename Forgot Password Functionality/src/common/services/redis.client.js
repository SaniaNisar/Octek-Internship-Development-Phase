import redis from 'redis';
import logger from '../../../winston.js';
const client = redis.createClient({
    url: process.env.REDIS_URL // Ensure this URL is correct
});

client.on('error', (err) => {
  console.error('Redis Client Error', err);
});

// Add a ready event handler to confirm the client is connected
client.on('ready', () => {
  logger.info('Redis client connected');
});

client.connect(); // Ensure the client connects

export default client;
