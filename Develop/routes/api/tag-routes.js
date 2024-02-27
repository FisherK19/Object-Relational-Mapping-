const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        { model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'category_id'] }
      ]
    });
    res.json(tags);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get one tag by id
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        { model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'category_id'] }
      ]
    });
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(tag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update a tag by id
router.put('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    await tag.update(req.body);
    res.json(tag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete a tag by id
router.delete('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    await tag.destroy();
    res.json({ message: 'Tag deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

