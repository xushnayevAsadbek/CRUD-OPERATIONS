import student from './card.img/student.png';
import course from './card.img/bookmark.png';
import payment from './card.img/payment.png';
import user from './card.img/user.png';
import './card.css'
import { NavLink } from 'react-router-dom';
export const Card = () => {
  return (
    <div className="container">
      <div className='card'>
        <NavLink to="/user" style={{
          height: "160px",
        }} >
          <div className="card-box1">
            <img src={student} alt="img" />
            <p className='card-box1__text'>
              Fanlar
            </p>

            <h2 className='card-box1__heading'>
              243
            </h2>
          </div>
        </NavLink>
        <NavLink to="/course" style={{
          height: "160px",
        }}>

          <div className="card-box1 course">
            <img src={course} alt="img" />
            <p className='card-box1__text'>
              Course
            </p>

            <h2 className='card-box1__heading'>
              13
            </h2>
          </div>
        </NavLink>
        <NavLink to="/payment" className="card-box1 payment">
          <img src={payment} alt="img" />
          <p className='card-box1__text'>
            Payments
          </p>

          <h2 className='card-box1__heading'>
            <sub>INR</sub> 556,000
          </h2>
        </NavLink>

        <NavLink to="/student" className="card-box1--user">
          
            <img src={user} alt="img" />
            <p className='card-box1__text'>
              Darslar
            </p>

            <h2 className='card-box1__heading'>
              3
            </h2>
         
        </NavLink>

      </div>
    </div>
  )
}