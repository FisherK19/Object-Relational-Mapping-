const router = require('express').Router();
const apiRoutes = require('./api');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Mount API routes
router.use('/api', apiRoutes);

// Mount category, product, and tag routes
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Catch-all route for handling unknown routes
router.use((req, res) => {
    res.status(404).send("<h1>Wrong Route!</h1>");
});

module.exports = router;

