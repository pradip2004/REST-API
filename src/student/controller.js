import db from '../../db.js'
import queries from './queries.js'


const getStudents = (req, res) => {
      db.query(queries.getStudents, (err, result) => {
            if (err) {
                  console.log(err);
            } else {
                  res.status(200).json(result.rows);
            }
      })
}

const getStudentById = (req, res) => {
      const id = parseInt(req.params.id);
      db.query(queries.getStudentById, [id], (err, result) => {
            if (err) {
                  console.log(err);
            } else {
                  res.status(200).json(result.rows[0]);
            }
      })
}

const addStudent = (req, res) => {
      const { name, email, age, dob } = req.body;
      db.query(queries.addStudent, [name, email, age, dob], (err, result) => {
            if (err) throw err;
            res.status(201).send("Student add successfully")
      })
}

const deleteStudentById = (req, res) => {
      const id = parseInt(req.params.id);
      db.query(queries.deleteStudentById, [id], (error, result) => {
            if (error) {
                  console.log(error);
            } else {
                  res.status(200).send("Student deleted successfully");
            }
      })
}

export default { getStudents, getStudentById, addStudent, deleteStudentById, };