import { RateLimiterRedis } from 'rate-limiter-flexible';
import Redis from 'ioredis';

const redisClient = new Redis(process.env.REDIS_URL);
export const loginLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  points: 5,
  duration: 15 * 60 * 1000,
});