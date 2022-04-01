const {gql} = require("apollo-server");
// Scalar types
// String, Int, Float, Boolean
// Sacalar types can return null. If we want to be stricter, we can add a suffix "!" eg: String!

exports.typeDefs = gql`
    type Query {
        hello: String
        numberOfProducts: Int
        products(filter: ProductsFilterInput): [Product!]!
        product(id: ID!) : Product
        categories: [Category!]!
        category(id: ID!) : Category
        reviews: [Review]!
        articles: [Page]!
        article(slug: String!): Page
    },

    type Page {
        id: ID!
        slug: String!
        title: String!
        content: String!
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        category: Category
        quantity: Int!
        price: Float!
        onSale: Boolean!
        img: String!
        reviews: [Review]!
    },

    type Category {
        id: ID!
        name: String!
        products(filter: ProductsFilterInput): [Product!]!
    },

    type Review {
        id: ID!
        date: String!
        rating: Int!
        title: String!
        comment: String
    },

    type Mutation {
        addCategory(input: AddCategoryInput!): Category!
        deleteCategory(id: ID!): Boolean!
        addProduct(input: AddProductInput!): Product!
        addReview(input: AddReviewInput!): Review!
    }

    input AddCategoryInput {
        name: String!
    }

    input AddProductInput {
        name: String!
        description: String!
        category: String
        quantity: Int!
        price: Float!
        onSale: Boolean!
        img: String!
    }

    input AddReviewInput {
        rating: Int!
        title: String!
        comment: String
        productId: String!
    }

    input ProductsFilterInput {
        onSale: Boolean
        rating: Int
    }
`;