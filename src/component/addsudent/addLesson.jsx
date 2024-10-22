
import "../Page/sudentpageni/sudent.css"
import { ToastContainer , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import edit from '../Page/sudentpageni/img/pen.svg';
import delet from '../Page/sudentpageni/img/trash.svg';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
Modal.setAppElement('#root');
export const AddLesson = () => {
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
      border: 'none',          
      padding: '20px',       
      borderRadius: '10px',    
      width: 'auto',         
      margin: 'auto',         
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',  
      backgroundColor: '#fff'  
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)', 
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


  return (
    <div className="container" style={{ backgroundColor: "#E5E5E5" , marginBottom:"25px"}}>
      <div className="student-page--header">
        <h1>Darslar:</h1>
        
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
         {/* <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Edit Student" > */}
         <Modal isOpen={isModalOpen} onRequestClose={closeModal} ariaHideApp={false} contentLabel="Example Modal" style={customStyles}>

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