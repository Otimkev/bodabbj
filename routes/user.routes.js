const express = require('express')
const router = express.Router()
const CheckUsername = require('../middleware/UsernameCheck')
const controllerAdmin = require('../controllers/admin.controller')
const controllerSales = require('../controllers/sales.controller')
const controllerSupervisor = require('../controllers/superSales.controller')

//admin
router.get('/adminpanel',controllerAdmin.adminPanel)
//Register admin
router.get('/admin_reg',controllerAdmin.adminRgister)
router.get('/profile/:adminId',controllerAdmin.profileDetail)
//bodaboda List
router.get('/boda_list',controllerAdmin.boda_list)
router.get('/tuku_list',controllerAdmin.tukutuku_list)
//boda detail view admin side
router.get('/boda_detail/:bodaId',controllerAdmin.bodaDetailAdmin)
//tuku detail view admin side
router.get('/tuku_detail/:tukuId',controllerAdmin.tukuDetailAdmin)
//sales
  //add sales
router.get('/sales_reg',controllerSales.addSales)
router.post('/sales_reg',controllerSales.registerSales)
//sales list
router.get('/sales_list',controllerSales.salesList)
//sales detail
router.get('/sales_detail/:salesId',controllerSales.salesDetail)
//sales edit and update detail
router.put('/sales_edit/:salesId',controllerSales.salesEditUpdate)
//sales delete
router.delete('/sales_delete/:salesId',controllerSales.salesDelete)
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
router.delete('/customer_delete/:customerId',controllerSales.customerDelete)

//SUPERVISOR
//supervisor panel
router.get('/supervisorpanel',controllerSupervisor.superPanel)
  //add supervisor
router.get('/supervisor_reg',controllerSupervisor.addsupervisor)
//register supervisor
router.post('/supervisor_reg',controllerSupervisor.registerSuper)
//get supervisor list
router.get('/supervisor_list',controllerSupervisor.supervisor_list)
//get supervisor detail
router.get('/supervisor_detail/:superId',controllerSupervisor.supervisorDetail)
//edit and update supervisor details
router.put('/supervisor_edit/:superId',controllerSupervisor.superEditUpdate)
//delete supervisoe
router.delete('/supervisor_delete/:superId',controllerSupervisor.superDelete)



function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
   next()
  }else{
   res.redirect('/api/auth/signin')
  }
 }


module.exports = router;