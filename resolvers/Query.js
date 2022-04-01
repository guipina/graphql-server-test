const {filterProducts} = require("./helpers");

exports.Query = {
    numberOfProducts: (parent, args, ctx) => ctx._products.length,
    products: (parent, {filter}, {_products, _reviews}) => filterProducts(filter, _products, _reviews),
    product: (parent, args, {_products}) => _products.find(p => p.id === args.id),
    categories: (parent, args, {_categories}) => _categories,
    category: (parent, args, {_categories}) => _categories.find(c => c.id === args.id),
    reviews: (parent, args, {_reviews}) => _reviews,
    articles: (parent, args, {_pages}) => _pages,
    article: (parent, args, {_pages}) => _pages.find(c => c.slug === args.slug)
};


