const contentful = require('contentful')

const client = contentful.createClient({
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    space: process.env.NEXT_PUBLIC_SPACEID
})

// Get all products
export const getProducts = async () =>{
    const response = await client.getEntries({
        content_type: 'products', limit: 1000
    })
    const products = response.items;
    return products;
}

// Get all categories
export const getProductCategories = async () => {
    const response = await client.getEntries({
        content_type: 'products', limit: 1000
    })

    const items = response.items.map((product) => product.fields.category)
    // how to get a single(unique) category
    let uniqueCategories = [...new Set(items)]

    return uniqueCategories;
}

// Get a subcategories by a category
export const getSubcategories = async (category) => {
    const response = await client.getEntries({
        content_type: 'products', limit: 1000
    })

    const individualCategory = response.items.filter((product) => product.fields.category === category)

    const subcategories = individualCategory.map((product) => product.fields.subCategory)
    let uniqueSubCategory = [...new Set(subcategories)]
    return uniqueSubCategory
}

// Get a subcategories by a category
export const getCategoryAndSubCategory = async (category) => {
    const response = await client.getEntries({
        content_type: 'products', limit: 1000
    })

    const individualCategory = response.items.filter((product) => product.fields.category === category)

    const subcategories = individualCategory.map((product) => product.fields)
    return subcategories
}


