const express = require('express')
const router = express.Router()
const controllers = require('../controllers/auth')

//http://localhost:3000/api/auth/login
router.post('/login', controllers.login)

//http://localhost:3000/api/auth/register
router.post('/register', controllers.register)
module.exports = router