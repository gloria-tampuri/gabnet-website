const contentful = require('contentful')
import cacheService, { CACHE_KEYS, CACHE_TTL } from './cacheService'

const client = contentful.createClient({
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    space: process.env.NEXT_PUBLIC_SPACEID
})

// Get all products (with caching)
export const getProducts = async () => {
    // Check cache first
    const cachedData = cacheService.get(CACHE_KEYS.PRODUCTS);
    if (cachedData) {
        console.log('📦 Products loaded from cache');
        return cachedData;
    }

    console.log('🌐 Fetching products from API');
    const response = await client.getEntries({
        content_type: 'products', limit: 1000
    })
    const products = response.items;
    
    // Cache the data
    cacheService.set(CACHE_KEYS.PRODUCTS, products, CACHE_TTL.MEDIUM);
    return products;
}

// Get all categories (with caching)
export const getProductCategories = async () => {
    // Check cache first
    const cachedData = cacheService.get(CACHE_KEYS.PRODUCT_CATEGORIES);
    if (cachedData) {
        console.log('📦 Categories loaded from cache');
        return cachedData;
    }

    console.log('🌐 Fetching categories from API');
    const response = await client.getEntries({
        content_type: 'products', limit: 1000
    })

    const items = response.items.map((product) => product.fields.category)
    // how to get a single(unique) category
    let uniqueCategories = [...new Set(items)]

    // Cache the data
    cacheService.set(CACHE_KEYS.PRODUCT_CATEGORIES, uniqueCategories, CACHE_TTL.LONG);
    return uniqueCategories;
}

// Get a subcategories by a category (with caching)
export const getSubcategories = async (category) => {
    const cacheKey = `${CACHE_KEYS.SUBCATEGORIES}${category}`;
    
    // Check cache first
    const cachedData = cacheService.get(cacheKey);
    if (cachedData) {
        console.log(`📦 Subcategories for "${category}" loaded from cache`);
        return cachedData;
    }

    console.log(`🌐 Fetching subcategories for "${category}" from API`);
    const response = await client.getEntries({
        content_type: 'products', limit: 1000
    })

    const individualCategory = response.items.filter((product) => product.fields.category === category)

    const subcategories = individualCategory.map((product) => product.fields.subCategory)
    let uniqueSubCategory = [...new Set(subcategories)]
    
    // Cache the data
    cacheService.set(cacheKey, uniqueSubCategory, CACHE_TTL.MEDIUM);
    return uniqueSubCategory
}

// Get a subcategories by a category (with caching)
export const getCategoryAndSubCategory = async (category) => {
    const cacheKey = `${CACHE_KEYS.CATEGORY_DATA}${category}`;
    
    // Check cache first
    const cachedData = cacheService.get(cacheKey);
    if (cachedData) {
        console.log(`📦 Category data for "${category}" loaded from cache`);
        return cachedData;
    }

    console.log(`🌐 Fetching category data for "${category}" from API`);
    const response = await client.getEntries({
        content_type: 'products', limit: 1000
    })

    const individualCategory = response.items.filter((product) => product.fields.category === category)

    const subcategories = individualCategory.map((product) => product.fields)
    
    // Cache the data
    cacheService.set(cacheKey, subcategories, CACHE_TTL.MEDIUM);
    return subcategories
}

// Cache management utilities
export const clearCache = () => {
    cacheService.clear();
    console.log('🗑️ All cache cleared');
}

export const getCacheInfo = () => {
    return cacheService.getCacheInfo();
}

export const clearCategoryCache = (category) => {
    const subcategoryKey = `${CACHE_KEYS.SUBCATEGORIES}${category}`;
    const categoryDataKey = `${CACHE_KEYS.CATEGORY_DATA}${category}`;
    
    cacheService.delete(subcategoryKey);
    cacheService.delete(categoryDataKey);
    console.log(`🗑️ Cache cleared for category: ${category}`);
}


