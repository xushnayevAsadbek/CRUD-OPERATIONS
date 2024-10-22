import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ToastContainer , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../Page/user/user.css'

export const AddAdminSubject = () => {
  const [subjects, setSubjects] = useState([]); 

  useEffect(() => {
    const storedSubjects = JSON.parse(localStorage.getItem("subjects")) || [];
    setSubjects(storedSubjects);
  }, []);
  
const handleDelete = (id) => {
    const updatedSubjects = subjects.filter(subject => subject.id !== id);
    setSubjects(updatedSubjects);
    localStorage.setItem("subjects", JSON.stringify(updatedSubjects)); 
    toast.info(`You have deleted your information`, {
        autoClose: 1000,
    })
  };
    return (
        <div  className="container"  style={{
            backgroundColor:'#E5E5E5',
            marginBottom:"25px"
           }}>
         
         <div style={{
                    width: "100%",
                    

                }}>
            <h2 className="subjects-title">
                Fanlar:
            </h2> <hr />
            

         </div>
         {subjects.length > 0 ? (
        <div className="shadow p-5 w-75 mx-auto">
          <ul style={{
            marginLeft:"15px",
            marginTop:"25px"
          }}>
            {subjects.map((subject) => (
                
            <li key={subject.id} className="subject-list">
               <NavLink to="/student"> 
               <p className="subjects-text"> {subject.name}</p>
               </NavLink>
               <button
                  className="delete--btn"
                  onClick={() => handleDelete(subject.id)}>
                  O'chirish
                </button>
              </li>
                
              
            ))}
          </ul>
        </div>
      ) : (
        <p className="subjects-text">Hali fanlar qo'shilmagan.</p>
      )}
        <ToastContainer/>

        </div>
        
    )
}