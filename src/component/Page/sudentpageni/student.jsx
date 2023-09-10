
import "./sudent.css"
import { useNavigate } from "react-router-dom"

export const StudentPage = () => {
    const navigate =useNavigate();
    const onBack = () =>{
        navigate(-1)
    }
    const canselback =()=>{
        navigate("/addstudent")}

    return(
       <div className="container" style={{
        backgroundColor:'#E5E5E5'
       }}>
       <div className="sudetnt-page--header">
       <h1>
       Students List
       </h1>
      <div>
      <button className="back--btn" onClick={onBack}>onBack</button>
       <button className="add--btn" onClick={canselback}> ADD NEW STUDENT</button>
      </div>
       </div>
       <h5> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor veritatis nesciunt blanditiis tempora assumenda enim.</h5>
       </div>   
    )
}