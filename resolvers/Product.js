exports.Product = {
    category: (parent, args, {_categories}) => _categories.find(c => c.id === parent.categoryId),
    reviews: (parent, args, {_reviews}) => _reviews.filter(r => r.productId === parent.id)
};