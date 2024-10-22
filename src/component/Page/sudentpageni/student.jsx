
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
  const onBack = () =>{
      navigate(-1)
  }
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedTasks);
  }, []);

 

console.log(students);

 

  return (
    <div className="container" style={{ backgroundColor: "#E5E5E5" }}>
      <div className="student-page--header">
        <h1>Darslar:</h1>
        <div>
          <button className="back--btn" onClick={onBack}>onBack</button>
        </div>
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
      
</div>
    </div>
  );
};