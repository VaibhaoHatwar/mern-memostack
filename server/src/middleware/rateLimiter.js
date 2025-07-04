import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // Use user ID if available, else IP, else try header, else fallback to "unknown"
    const key =
      req.user?.id || req.ip || req.headers["x-forwarded-for"] || "unknown";

    const { success } = await ratelimit.limit(key);

    if (!success) {
      console.warn(`⛔ Rate limit exceeded by: ${key}`);
      return res.status(429).json({
        message: "Too many requests, please try again later.",
      });
    }

    next();
  } catch (error) {
    console.error("⚠️ Rate limiter error:", error.message);
    next(); // fail-open: continue if rate limit fails
  }
};

export default rateLimiter;
