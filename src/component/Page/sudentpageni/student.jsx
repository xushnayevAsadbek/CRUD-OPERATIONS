
import "./sudent.css"
import { ToastContainer , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import edit from './img/pen.svg';
import delet from './img/trash.svg';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

export const StudentPage = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enrol: ''
  });
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
  const customStyles = {
    content: {
      border: 'none',          // Borderni olib tashlash
      padding: '20px',         // Padding berish
      borderRadius: '10px',    // Yana ham chiroyli ko'rinish uchun border-radius
      width: 'auto',          // O'lchami moslashuvchan bo'lishi uchun kenglik
      margin: 'auto',          // Markazga joylash
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',  // Modalni markazlashtirish
      backgroundColor: '#fff'  // Orqa fon rangi
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)', // Oyna orqasidagi tus
    },
  };
  const openModal = (index) => {
    const studentToEdit = students[index];
    setFormData({
      name: studentToEdit.name,
      document: studentToEdit.document,
      ppt: studentToEdit.ppt,
      video: studentToEdit.video
    });
    setSelectedStudentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudentIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = () => {
    const { name, document, ppt, video } = formData;

    if (name && document && ppt && video) {
      const updatedStudents = students.map((student, i) =>
        i === selectedStudentIndex
          ? { ...student, name, document, ppt, video }
          : student
      );
      setStudents(updatedStudents);
      localStorage.setItem("students", JSON.stringify(updatedStudents));
      toast.success('Your information has been updated', {
        autoClose: 1000,
      });
      closeModal();
    }
  };
console.log(students);

  // const handleEdit = (index) => {
  //   const studentToEdit = students[index];
    
  //   const newName = prompt("Enter new name:", studentToEdit.name);
  //   const newEmail = prompt("Enter new email:", studentToEdit.email);
  //   const newPhone = prompt("Enter new phone:", studentToEdit.phone);
  //   const newEnrol = prompt("Enter new enrol number:", studentToEdit.enrol);

  //   if (newName && newEmail && newPhone && newEnrol ) {
  //     const updatedStudents = students.map((student, i) =>
  //       i === index
  //         ? {
  //             ...student,
  //             name: newName,
  //             email: newEmail,
  //             phone: newPhone,
  //             enrol: newEnrol,
  //           }
  //         : student
  //     );
  
  //     setStudents(updatedStudents);
  //     localStorage.setItem("students", JSON.stringify(updatedStudents));
  //   }
  //   toast.success('Your information has been updated', {
  //       autoClose: 1000,
  //   });
  // };

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
                <th>Document</th>
                <th>PPT</th>
                <th>Video</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.document ? student.document.name : "No document"}</td>
                  <td>{student.ppt ? student.ppt.name : "No PPT"}</td>
                  <td>{student.video ? student.video.name : "No video"}</td>
                  <td>
                    <button className="edit--btn" onClick={() => openModal(index)}><img src={edit} alt="pen-icon" /></button>
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
         <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Edit Student" style={customStyles}>
          <h2>Edit Lesson</h2>
          <form className="form">
            <div className="form--card">
               <label htmlFor="task_title" className="w-50 d-block mx-auto">
               <p>Mavzu nomi:</p>
              <input
                id="task_title"
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </label>
            </div>
           <div className="form--card">
           <label htmlFor="task_email">
           <p>Document file:</p>
              <input
              id="task_email"
              type="file"
              name="document"
              accept=".pdf,.doc,.docx"
                onChange={handleInputChange}
              />
            </label>
           </div>
           <div className="form--card">  
            <label htmlFor="task_phone">
            <p className="text-primary fw-bold text-uppercase">PPT file:</p>
              <input
              id="task_phone"
              type="file"
              name="ppt"
              accept=".ppt,.pptx"
                onChange={handleInputChange}
              />
            </label>
           </div>
           <div className="form--card">
           <label htmlFor="task_enroll">
           <p className="text-primary fw-bold text-uppercase">Videoni</p>
              <input
              id="task_enroll"
              type="file"
              name="video"
              accept="video/*"
              onChange={handleInputChange}
              />
            </label>
           </div>
           <div className="form--card mb-5" style={{
            display:"flex",
            gap:"15px",
            justifyContent:"center"
           }}>
             <button className="form--card__btn" type="button" onClick={handleSubmit}>
              Save
            </button>
            <button  className="form--card__btn1 " type="button" onClick={closeModal}>
              Cancel
            </button>
           </div>
           
          </form>
        </Modal>
        <ToastContainer/>
      </div>
    </div>
  );
};