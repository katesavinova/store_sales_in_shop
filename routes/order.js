const express = require('express')
const router = express.Router()
const controllers = require('../controllers/order')

router.post('/', controllers.getAll)

//http://localhost:3000/api/auth/register
router.get('/', controllers.create)
module.exports = router