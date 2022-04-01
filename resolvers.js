const {_products, _categories, _pages} = require("./data");

exports.resolvers = {
    Query: {
        numberOfProducts: () => _products.length,
        products: () => _products,
        product: (parent, args, ctx) => _products.find(p => p.id === args.id),
        categories: () => _categories,
        category: (parent, args, ctx) => _categories.find(c => c.id === args.id),
        articles: (parent, args, ctx) => _pages,
        article: (parent, args, ctx) => _pages.find(c => c.slug === args.slug)
    },
    Category: {
        products: (parent, args, ctx) => _products.filter(p => p.categoryId === parent.id)
    },
    Product: {
        category: (parent, args, ctx) => _categories.find(c => c.id === parent.categoryId)
    }
};