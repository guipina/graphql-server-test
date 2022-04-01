const {ApolloServer} = require("apollo-server");

const {typeDefs} = require("./schema");
const {Mutation} = require("./resolvers/Mutation");
const {Query} = require("./resolvers/Query");
const {Category} = require("./resolvers/Category");
const {Product} = require("./resolvers/Product");

const {_products, _categories, _reviews, _pages} = require("./data");

const server = new ApolloServer({
    typeDefs, 
    resolvers: {
        Query,
        Category,
        Product,
        Mutation
    },
    context: {
        _products: _products,
        _categories: _categories,
        _reviews: _reviews,
        _pages: _pages
    }
});
server.listen().then(({url}) => {console.log(`server is ready at url ${url}`)});