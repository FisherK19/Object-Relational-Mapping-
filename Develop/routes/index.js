const router = require('express').Router();
const apiRoutes = require('./api');

// Mount API routes
router.use('/api', apiRoutes);

// Catch-all route for handling unknown routes
router.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = router;
