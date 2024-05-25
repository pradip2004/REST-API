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

const updateStudent = (req, res) => {
      const id = parseInt(req.params.id);
      const { name } = req.body;
      db.query(queries.getStudentById, [id], (error, result) => {
            if (error) {
                  console.error("Error checking student existence:", error);
                  return res.status(500).send("Error checking student existence");
            }

            const noStudentFound = result.rows.length === 0;
            if (noStudentFound) {
                  return res.status(404).send("Student does not exist in the database");
            }

            db.query(queries.updateStudent, [name, id], (error, result) => {
                  if (error) {
                        console.error("Error updating student:", error);
                        return res.status(500).send("Error updating student");
                  }

                  res.status(200).send("Student updated successfully");
            })
      })
}

export default { getStudents, getStudentById, addStudent, deleteStudentById, updateStudent };