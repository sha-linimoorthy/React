const express=require('express')
const router=express.Router()
const course_contr=require('../controllers/course_controller')

router.get('/course',course_contr.getall)

module.exports=router;
