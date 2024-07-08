import { useNavigate } from "react-router-dom"
import "./course.css"
export const CoursePage = () => {
    const navigate =useNavigate();
    const onBack = () =>{
        navigate(-1)
    }
    return(
       <div className="container" style={{
        backgroundColor:'#E5E5E5'
       }}>
       <div className="sudetnt-page--header">
       <h1>
       Course List
       </h1>
      <div>
      <button className="back--btn" onClick={onBack}>onBack</button>
       <button className="add--btn"> ADD NEW Course</button>
      </div>
       </div>
       <div className="">
       <table className="course-table">
    <thead>
      <tr>
        <th className="course-th">Name</th>
        <th className="course-th">Email</th>
        <th className="course-th">Phone</th>
        <th className="course-th">Enrol Number</th>
        <th className="course-th">Date of admission</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="course-td">John</td>
        <td className="course-td">john@gmail.com</td>
        <td className="course-td">+998</td>
        <td className="course-td">New York</td>
        <td className="course-td">22.03.2021</td>
      </tr>
      <tr>
        <td className="course-td">Jane</td>
        <td className="course-td">jane@gmail.com</td>
        <td className="course-td">+998</td>
        <td className="course-td">York</td>
        <td className="course-td">22.03.2021</td>
      </tr>
      <tr>
        <td className="course-td">Mike</td>
        <td className="course-td">mike@gmail.com</td>
        <td className="course-td">+998</td>
        <td className="course-td">York</td>
        <td className="course-td">22.03.2021</td>
      </tr>
    </tbody>
  </table>
       </div>
       </div>   
    )
}