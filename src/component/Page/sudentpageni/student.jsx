
import "./sudent.css"
import { ToastContainer , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import edit from './img/pen.svg';
import delet from './img/trash.svg';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const StudentPage = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const onBack = () =>{
      navigate(-1)
  }
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedTasks);
  }, []);

 
  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    toast.info(`You have deleted your information`, {
        autoClose: 1000,
    })
  };


  const handleEdit = (index) => {
    const studentToEdit = students[index];
    
    const newName = prompt("Enter new name:", studentToEdit.name);
    const newEmail = prompt("Enter new email:", studentToEdit.email);
    const newPhone = prompt("Enter new phone:", studentToEdit.phone);
    const newEnrol = prompt("Enter new enrol number:", studentToEdit.enrol);

    if (newName && newEmail && newPhone && newEnrol ) {
      const updatedStudents = students.map((student, i) =>
        i === index
          ? {
              ...student,
              name: newName,
              email: newEmail,
              phone: newPhone,
              enrol: newEnrol,
            }
          : student
      );
  
      setStudents(updatedStudents);
      localStorage.setItem("students", JSON.stringify(updatedStudents));
    }
    toast.success('Your information has been updated', {
        autoClose: 1000,
    });
  };

  return (
    <div className="container" style={{ backgroundColor: "#E5E5E5" }}>
      <div className="student-page--header">
        <h1>Darslar:</h1>
        <div>
          <button className="back--btn" onClick={onBack}>onBack</button>
        </div>
      </div>

      <div className="shadow p-5 w-75 mx-auto">
        {students.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Enrol Number</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.enrol}</td>
                  <td>{student.date}</td>
                  <td>
                    <button className="edit--btn" onClick={() => handleEdit(index)}><img src={edit} alt="pen-icon" /></button>
                  </td>
                  <td>
                    <button className="edit--btn" onClick={() => handleDelete(index)}><img src={delet} alt="delet icon" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Hali darslar qo'shilmagan</p>
        )}
        <ToastContainer/>
      </div>
    </div>
  );
};
