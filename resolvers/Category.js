const {filterProducts} = require("./helpers");

exports.Category = {
    products: (parent, {filter}, {_products, _reviews}) => filterProducts(filter, _products.filter(p => p.categoryId === parent.id), _reviews)
};