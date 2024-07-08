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
       <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Enrol Number</th>
        <th>Date of admission</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>john@gmail.com</td>
        <td>+998</td>
        <td>New York</td>
        <td>22.03.2021</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>jane@gmail.com</td>
        <td>+998</td>
        <td>York</td>
        <td>22.03.2021</td>
      </tr>
      <tr>
        <td>Mike</td>
        <td>mike@gmail.com</td>
        <td>+998</td>
        <td>York</td>
        <td>22.03.2021</td>
      </tr>
    </tbody>
  </table>
       </div>
       </div>   
    )
}