'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Add your model imports here
const Product = require('./product');
const ProductTag = require('./producttag');
const Tag = require('./tag');

// Add your models to the db object
db['Product'] = Product;
db['ProductTag'] = ProductTag;
db['Tag'] = Tag;

// Iterate over each model and associate if needed
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Export the sequelize instance and Sequelize module
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

