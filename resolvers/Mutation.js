const {v4: uuid} = require("uuid");

exports.Mutation = {
    addCategory: (parent, {input}, ctx) => {
        const {name} = input;
        const newCategory = { id: uuid(), name: name };

        const existingIndex = ctx._categories.findIndex((cat) => cat.name === name);
        if(existingIndex !== -1) 
            return ctx._categories[existingIndex];

        ctx._categories.push(newCategory);
        return newCategory;
    },

    deleteCategory: (parent, {id}, ctx) => {
        const catIndex = ctx._categories.findIndex(cat => cat.id === id);

        if(catIndex === -1) return false;

        ctx._categories.splice(catIndex, 1);
        return true;
    }, 

    addProduct: (parent, {input}, ctx) => {
        const {name, description, quantity, price, onSale, img, category } = input;

        const getCategoryID = () => {
            const existingCategory = ctx._categories.find(c => c.name === category);

            if(existingCategory)
                return existingCategory.id;
        }

        let newProduct = {
            id: uuid(), 
            name: name,
            description:description,
            quantity:quantity,
            price:price,
            onSale:onSale,
            img:img,
            categoryId: getCategoryID()
        };

        const existingIndex = ctx._products.findIndex((p) => p.name === name);
        if(existingIndex !== -1) 
            return ctx._products[existingIndex];

        ctx._products.push(newProduct);
        return newProduct;
    },

    addReview: (parent, {input}, ctx) => {
        const {title, comment, rating, productId} = input;

        const newReview = { 
            id: uuid(),
            date: new Date().toLocaleDateString(),
            rating: rating,
            title: title,
            comment: comment,
            productId: productId
        };

        const existingProduct = ctx._products.find((p) => p.id === productId);
        if(!existingProduct) 
            return newReview;

        ctx._reviews.push(newReview);
        return newReview;
    }
}