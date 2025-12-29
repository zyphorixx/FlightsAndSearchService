const express = require('express');
const CityController = require('../../controllers/city-controller');
const router = express.Router();

// Create city
router.post('/', CityController.create);

// Bulk create cities
router.post('/bulk', CityController.createMultiple);

// Get all cities
router.get('/', CityController.getAll);

// Get city by id
router.get('/:id', CityController.get);

// Update city
router.patch('/:id', CityController.update);

// Delete city
router.delete('/:id', CityController.destroy);

module.exports = router;