const _products = [
    {
        id: "1",
        name: "prod 1",
        description: "this is prod one, look at it!",
        quantity: 1,
        price: 132.0,
        onSale: true,
        img: "img one",
        categoryId: "c-1"
    },
    {
        id: "2",
        name: "prod 2",
        description: "this is prod two, look at it!",
        quantity: 2,
        price: 49.99,
        onSale: true,
        img: "img two",
        categoryId: "c-1"
    },
    {
        id: "3",
        name: "prod 3",
        description: "this is prod three, look at it!",
        quantity: 1,
        price: 12.0,
        onSale: false,
        img: "img three",
        categoryId: "c-2"
    },
    {
        id: "4",
        name: "prod 4",
        description: "this is prod three, look at it!",
        quantity: 1,
        price: 22.0,
        onSale: false,
        img: "img three",
        categoryId: "c-1"
    }
];

const _reviews = [
    {
        id: "1",
        productId: "1",
        date: "2022-03-21",
        title: "Great product!",
        comment: "This product changed my life!",
        rating: 5
    },
    {
        id: "2",
        productId: "1",
        date: "2022-03-19",
        title: "Meh.. product!",
        comment: "This product didn't change my life!",
        rating: 3
    },
    {
        id: "3",
        productId: "1",
        date: "2022-02-14",
        title: "Great product!",
        comment: "This product changed my life!",
        rating: 4
    },
    {
        id: "4",
        productId: "2",
        date: "2022-03-21",
        title: "Great product!",
        comment: "This product changed my life!",
        rating: 5
    },
    {
        id: "5",
        productId: "2",
        date: "2022-03-21",
        title: "Great product!",
        comment: "This product changed my life!",
        rating: 5
    },
    {
        id: "6",
        productId: "3",
        date: "2022-03-21",
        title: "Great product!",
        comment: "This product changed my life!",
        rating: 1
    },
    {
        id: "7",
        productId: "3",
        date: "2022-03-21",
        title: "Great product!",
        comment: "This product changed my life!",
        rating: 1
    },
    {
        id: "8",
        productId: "1",
        date: "2022-03-21",
        title: "Great product!",
        comment: "This product changed my life!",
        rating: 5
    },
];

const _categories = [
    {
        id: "c-1",
        name: "Shoes"
    },
    {
        id: "c-2",
        name: "Fashion"
    },
    {
        id: "c-3",
        name: "Furniture"
    },
    {
        id: "c-4",
        name: "Garden"
    }
];

const _pages = [
    {
        id: "1",
        slug: "article-1",
        title: "Some article named one",
        content: "Bla bla bla some content brr brbrdakjfadsf..."
    },
    {
        id: "2",
        slug: "article-2",
        title: "Some article named Two",
        content: "Bla bla bla some content brr brbrdakjfadsf..."
    },
    {
        id: "3",
        slug: "article-3",
        title: "Some article named Three",
        content: "Bla bla bla some content brr brbrdakjfadsf..."
    },
    {
        id: "4",
        slug: "article-4",
        title: "Some article named Four",
        content: "Bla bla bla some content brr brbrdakjfadsf..."
    },
    {
        id: "5",
        slug: "article-5",
        title: "Some article named 5",
        content: "Bla bla bla some content brr and other stuff..."
    },
    {
        id: "99",
        slug: "article-99",
        title: "Some article named 99 and nothing more",
        content: "Bla bla bla some content brr and other stuff..."
    },
    {
        id: "88",
        slug: "article-88",
        title: "Some article named BLABLA GG",
        content: "Bla bla bla some content brr and other stuff..."
    },
    {
        id: "100",
        slug: "article-100",
        title: "Some article named 100",
        content: "Bla bla bla some content brr and other neat stuff..."
    },
    {
        id: "99",
        slug: "article-999",
        title: "Some article named 99",
        content: "Bla bla bla some content brr and other neat stuff..."
    },
];

module.exports = { _products, _categories, _reviews, _pages}