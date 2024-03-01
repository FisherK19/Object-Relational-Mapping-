const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Converse Sneakers',
    price: 60.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Dictionary',
    price: 40.99,
    stock: 15,
    category_id: 4,
  },
  {
    product_name: 'Records',
    price: 10.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Cargo Shorts',
    price: 25.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
