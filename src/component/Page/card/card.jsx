import student from './card.img/student.png' ;
import './card.css'
import { NavLink } from 'react-router-dom';
export const Card = () =>{
    return (
        <div className="container">
      <div className='card'>
     <NavLink to="/student" style={{
      height:"160px",
     }} >
     <div className="card-box1">
        <img src={student} alt="img" />
        <p className='card-box1__text'>
        Students
        </p>

        <h2 className='card-box1__heading'>
        243
        </h2>
      </div>
     </NavLink>
      <NavLink to="/course"  style={{
      height:"160px",
     }}>

      <div className="card-box1">
        <img src={student} alt="img" />
        <p className='card-box1__text'>
        Course
        </p>

        <h2 className='card-box1__heading'>
      13
        </h2>
      </div>
      </NavLink>
      <div className="card-box1">
        <img src={student} alt="img" />
        <p className='card-box1__text'>
        Payments
        </p>

        <h2 className='card-box1__heading'>
        <sub>INR</sub> 556,000
        </h2>
      </div>


      <div className="card-box1">
        <img src={student} alt="img" />
        <p className='card-box1__text'>
        Users
        </p>

        <h2 className='card-box1__heading'>
        3
        </h2>
      </div>
      </div>
        </div>
    )
}