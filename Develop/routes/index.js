const router = require('express').Router();
const apiRoutes = require('./api');
const categoryRoutes = require('./api/category-routes');
const productRoutes = require('./api/product-routes');

// Mount API routes
router.use('/api', apiRoutes);
router.use('/api/categories', categoryRoutes);
router.use('/api/products', productRoutes);

// Catch-all route for handling unknown routes
router.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = router;
