const express = require('express')
const router = express.Router()
const controllers = require('../controllers/category')

//http://localhost:3000/api/auth/category
router.get('/', controllers.getAll)
router.get('/:id', controllers.getById)
router.delete('/:id', controllers.remove)
router.post('/', controllers.create)
router.patch('/:id', controllers.update)

module.exports = router