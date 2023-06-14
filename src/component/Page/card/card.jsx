import student from './card.img/student.png' ;
import './card.css'
export const Card = () =>{
    return (
        <div className="container">
      <div className='card'>
      <div className="card-box1">
        <img src={student} alt="img" />
        <p className='card-box1__text'>
        Students
        </p>

        <h2 className='card-box1__heading'>
        243
        </h2>
      </div>

      <div className="card-box1">
        <img src={student} alt="img" />
        <p className='card-box1__text'>
        Students
        </p>

        <h2 className='card-box1__heading'>
        243
        </h2>
      </div>


      <div className="card-box1">
        <img src={student} alt="img" />
        <p className='card-box1__text'>
        Students
        </p>

        <h2 className='card-box1__heading'>
        243
        </h2>
      </div>


      <div className="card-box1">
        <img src={student} alt="img" />
        <p className='card-box1__text'>
        Students
        </p>

        <h2 className='card-box1__heading'>
        243
        </h2>
      </div>
      </div>
        </div>
    )
}