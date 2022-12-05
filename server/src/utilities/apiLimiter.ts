import expressRateLimiter from "express-rate-limit";

export const limiter = expressRateLimiter({
  windowMs: 60 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
});
