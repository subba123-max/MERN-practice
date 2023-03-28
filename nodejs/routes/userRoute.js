const express= require('express')
const router=express.Router()
const userController=require('../controllers/userController')
router.get('/',userController.sample)
router.post('/register',userController.register)
router.post('/login',userController.login)
router.patch('/update/:id',userController.update)

module.exports=router