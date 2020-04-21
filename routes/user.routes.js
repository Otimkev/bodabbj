const express = require('express')
const router = express.Router()
const CheckUsername = require('../middleware/UsernameCheck')
const controllerAdmin = require('../controllers/admin.controller')
const controllerSales = require('../controllers/sales.controller')

//admin
router.get('/adminpanel',controllerAdmin.adminPanel)

//sales
  //add sales
router.get('/sales_reg',controllerSales.addSales)
router.post('/sales_reg',controllerSales.registerSales)
//sales list
router.get('/sales_list',controllerSales.salesList)
//sales detail
router.get('/sales_detail/:salesId',controllerSales.salesDetail)
//sales panel
router.get('/salespanel',controllerSales.salesPanel)
//customer registraon
router.get('/customer_reg',ensureAuthenticated,controllerSales.customerReg)

//sales supervisor
  //add supervisor
router.get('/supervisor_reg',controllerAdmin.addsupervisor)

function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
   next()
  }else{
   res.redirect('/api/auth/signin')
  }
 }


module.exports = router;