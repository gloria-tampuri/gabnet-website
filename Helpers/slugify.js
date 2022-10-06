// A function to transform the category and subcategory to url slug
export const slugify = str => str.toLowerCase()
    .trim().replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
