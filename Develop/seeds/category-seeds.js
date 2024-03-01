const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Books',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = async () => {
  try {
    console.log('Seeding categories...'); // Log a message to indicate that seeding is starting
    await Category.bulkCreate(categoryData);
    console.log('Categories seeded successfully!'); // Log a success message after seeding completes
  } catch (error) {
    console.error('Error seeding categories:', error); // Log any errors that occur during seeding
  }
};

module.exports = seedCategories;
