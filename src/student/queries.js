const getStudents = 'SELECT * FROM students';
const getStudentById = "SELECT * FROM students WHERE id = $1";
const addStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const deleteStudentById = "DELETE FROM students WHERE id = $1";
export default {
      getStudents,
      getStudentById,
      addStudent,
      deleteStudentById
}