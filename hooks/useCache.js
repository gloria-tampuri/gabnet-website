import { useState, useEffect } from 'react';
import cacheService, { CACHE_KEYS, CACHE_TTL } from '../Helpers/cacheService';
import { clearCache, getCacheInfo, clearCategoryCache } from '../Helpers/queries';

// Custom hook for cache management
export const useCache = () => {
  const [cacheStats, setCacheStats] = useState({
    size: 0,
    info: {}
  });

  // Update cache stats
  const updateCacheStats = () => {
    setCacheStats({
      size: cacheService.size(),
      info: getCacheInfo()
    });
  };

  // Clear all cache
  const clearAllCache = () => {
    clearCache();
    updateCacheStats();
  };

  // Clear specific category cache
  const clearCategory = (category) => {
    clearCategoryCache(category);
    updateCacheStats();
  };

  // Refresh cache stats on mount
  useEffect(() => {
    updateCacheStats();
  }, []);

  return {
    cacheStats,
    clearAllCache,
    clearCategory,
    updateCacheStats
  };
};

// Hook for cache-aware data fetching
export const useCachedData = (fetchFunction, cacheKey, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const result = await fetchFunction();
        setData(result);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
};

export default useCache;
