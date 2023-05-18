const express=require('express')
const router=express.Router()
const course_contr=require('../controllers/course_controller')
const count_contr=require('../controllers/count_controller')
router.get('/count',count_contr.getall)
router.post('/count',count_contr.insertOne)
router.put('/course',course_contr.updateone)
router.post('/course',course_contr.insertcourse)
router.delete('course/:courseId',course_contr.deleteone)


module.exports=router;
