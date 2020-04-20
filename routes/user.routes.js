const express = require('express')
const router = express.Router()
const CheckUsername = require('../middleware/UsernameCheck')
const controllerAdmin = require('../controllers/admin.controller')

//admin
router.get('/adminpanel',controllerAdmin.adminPanel)

//sales
  //add sales
router.get('/sales_reg',controllerAdmin.addSales)

//sales supervisor
  //add supervisor
router.get('/supervisor_reg',controllerAdmin.addsupervisor)


module.exports = router;