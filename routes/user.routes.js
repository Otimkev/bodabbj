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
router.post('/customer_reg',controllerSales.customerRegister)
//get customer detail
router.get('/customer/:customerId',ensureAuthenticated,controllerSales.customerDetail)
//get edit cutomer detail
router.get('/customer_edit/:customerId',controllerSales.customerEdit)
//submit update
router.put('/customer_update/:customerId',controllerSales.customerEditUpdate)
//delete customer
router.get('/customer_delete/:customerId',controllerSales.customerDelete)

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