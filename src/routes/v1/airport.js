const express = require('express');
const { create, get, getAll, update, destroy } = require('../../controllers/airport-controllers');

const router = express.Router();

router.post('/', create);                    // POST /api/v1/airports
router.get('/', getAll);                     // GET /api/v1/airports  
router.get('/:id', get);                     // GET /api/v1/airports/:id
router.patch('/:id', update);                // PATCH /api/v1/airports/:id
router.delete('/:id', destroy);              // DELETE /api/v1/airports/:id

module.exports = router;
