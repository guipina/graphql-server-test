const { _reviews } = require("../data");

function filterProducts(filter, products, reviews) {
    
    // No filter applied
    if(!filter) return products;

    let filteredProducts = products;
    // Sale
    if(filter.onSale) filteredProducts = filteredProducts.filter((p) => p.onSale)

    // Rating
    if(filter.rating && [1,2,3,4,5].includes(filter.rating)) {
        filteredProducts = filteredProducts.filter(product => {

            const productReviews = _reviews.filter(r => r.productId === product.id);
            // Product has no reviews
            if(productReviews.length === 0) return false;

            const productAvgReview = Math.round(productReviews.reduce((acc, review) => acc + review.rating, 0) / (productReviews.length));
            console.log(productAvgReview)
            return productAvgReview >= filter.rating;
        })
    }

    return filteredProducts;
}




module.exports = {filterProducts}