// Cache service for managing data caching
class CacheService {
  constructor() {
    this.cache = new Map();
    this.cacheTimestamps = new Map();
    this.defaultTTL = 5 * 60 * 1000; // 5 minutes in milliseconds
  }

  // Set cache with TTL (Time To Live)
  set(key, data, ttl = this.defaultTTL) {
    const timestamp = Date.now();
    this.cache.set(key, data);
    this.cacheTimestamps.set(key, timestamp + ttl);
  }

  // Get cached data if not expired
  get(key) {
    const timestamp = this.cacheTimestamps.get(key);
    if (timestamp && Date.now() < timestamp) {
      return this.cache.get(key);
    }
    // Remove expired cache
    this.delete(key);
    return null;
  }

  // Check if cache exists and is valid
  has(key) {
    const timestamp = this.cacheTimestamps.get(key);
    return timestamp && Date.now() < timestamp;
  }

  // Delete specific cache entry
  delete(key) {
    this.cache.delete(key);
    this.cacheTimestamps.delete(key);
  }

  // Clear all cache
  clear() {
    this.cache.clear();
    this.cacheTimestamps.clear();
  }

  // Get cache size
  size() {
    return this.cache.size;
  }

  // Get cache info for debugging
  getCacheInfo() {
    const info = {};
    for (const [key, timestamp] of this.cacheTimestamps.entries()) {
      info[key] = {
        hasData: this.cache.has(key),
        expiresAt: new Date(timestamp).toISOString(),
        isExpired: Date.now() >= timestamp
      };
    }
    return info;
  }
}

// Create singleton instance
const cacheService = new CacheService();

// Cache keys constants
export const CACHE_KEYS = {
  PRODUCT_CATEGORIES: 'product_categories',
  PRODUCTS: 'products',
  SUBCATEGORIES: 'subcategories_',
  CATEGORY_DATA: 'category_data_'
};

// Cache TTL constants (in milliseconds)
export const CACHE_TTL = {
  SHORT: 2 * 60 * 1000,    // 2 minutes
  MEDIUM: 5 * 60 * 1000,   // 5 minutes
  LONG: 15 * 60 * 1000,    // 15 minutes
  VERY_LONG: 60 * 60 * 1000 // 1 hour
};

export default cacheService;
