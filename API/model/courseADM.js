const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId:String,
  courseName:String,
  ccredits:Number,
  date: String
});

const CourseADM = mongoose.model('CourseADMIN', courseSchema);
module.exports = CourseADM;
