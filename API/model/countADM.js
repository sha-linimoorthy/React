const mongoose = require('mongoose');
const countSchema = new mongoose.Schema({
  name:String,
  rollno:String,  
  courseId:[String],
  courseName:[String],
  count:Number
});
const Count = mongoose.model('Count', countSchema);
module.exports = Count;
