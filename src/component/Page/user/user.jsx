import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './user.css'

export const User = () => {
  const [subjects, setSubjects] = useState([]); 
  const navigate =useNavigate();

  useEffect(() => {
    const storedSubjects = JSON.parse(localStorage.getItem("subjects")) || [];
    setSubjects(storedSubjects);
  }, []);
  const onBack = () =>{
    navigate(-1)
}

    return (
        <div  className="container"  style={{
            backgroundColor:'#E5E5E5'
           }}>
            <button className="back--btn  pt-9 active" style={{
          marginTop:'20px'}} onClick={onBack}>onBack</button>
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
               
              </li>
                
              
            ))}
          </ul>
        </div>
      ) : (
        <p className="subjects-text">Hali fanlar qo'shilmagan.</p>
      )}
       

        </div>
        
    )
}