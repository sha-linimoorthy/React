const Countc =require('../model/countADM')

// insert
module.exports.insertOne = async (req, res) => {
    const count = new Countc({
     name:req.body.name,
     rollno:req.body.rollno,   
     courseId: req.body.courseId,
     courseName: req.body.courseName,
     count:req.body.count,
   });
   console.log(count)
     const result = await Countc.findOne({rollno: req.body.rollno});
     if (result) {
     console.error("Already Exists")
     res.send({ msg: "Already Exists" });
     }
     const saved_resp = await count.save();
     res.send(saved_resp);
 };
 
 //getall
 module.exports.getall = async (req, res) => {
  const count = await Countc.find({});
  console.log(count);
  res.send(count);
};