
const Student = require("../model/Student");

// CREATE STUDENT
const createStudent = async (req, res, next) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      success: true,
      data: student
    });

  } catch (error) {
    next(error);
  }
};


// Get All STUDENT

const getStudents = async (req, res, next) => {
  try {

    const kitty = await Student.find();

    res.status(200).json({
      success: true,
      count: kitty.length,
      data: kitty
    });

  } catch (error) {
    next(error);
  }
};


// update the student record
// UPDATE STUDENT
const updateStudent = async (req, res, next) => {
  try {

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      data: student
    });

  } catch (error) {
    next(error);
  }
};


//delete the record

const deleteStudent = async (req, res, next) => {
  try {

    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully"
    });

  } catch (error) {
    next(error);
  }
}

module.exports={createStudent,getStudents,updateStudent,deleteStudent}