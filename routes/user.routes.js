const express = require('express')
const router = express.Router()
const CheckUsername = require('../middleware/UsernameCheck')
const controllerAdmin = require('../controllers/admin.controller')

//admin
router.get('/adminpanel',controllerAdmin.adminPanel)

//sales

//sales supervisor


module.exports = router;