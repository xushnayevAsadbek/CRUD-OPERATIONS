
import "./sudent.css"
import { ToastContainer , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import edit from './img/pen.svg';
import delet from './img/trash.svg';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
Modal.setAppElement('#root');
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
      <div>
      {students.length > 0 ? (
    <div>
      {students.map((student, index) => (
        <section className="text-gray-600 body-font" key={index}>
          <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              {/* Agar video bo'lsa, ko'rsatiladi */}
              {student.video ? (
                <video className="object-cover object-center rounded" controls width="720">
                  <source src={student.video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x360"/>
              )}
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Mavzu nomi: {student.name ? student.name : "Student's Name"}
              </h1>
              <div className="flex justify-center">
                <button
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  {student.document ? student.document.name : "No document"}
                </button>
                <button
                  className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  {student.ppt ? student.ppt.name : "No PPT"}
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  ) : (
    <p>Hali darslar qo'shilmagan</p>
  )}
      <section className="text-gray-600 body-font">
  <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <video className="object-cover object-center rounded" controls width="720" >
        <source src="your-video-url.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
      </h1>
      
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    
  </div>
</section>
</div>
    </div>
  );
};