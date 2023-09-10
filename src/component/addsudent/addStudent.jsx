import { useNavigate } from "react-router-dom";
import "./addstudent.css"

export const AddStudent = () =>{

    const navigate =useNavigate();
    const onBack = () =>{
        navigate(-1)
    }
    return(
        <div className="container" style={{
            backgroundColor:'#E5E5E5'
           }}>
            <h2 className="sudetnt-page--add">
            </h2>

            <button className="btn btn-susces" onClick={onBack}>onBack</button>
        </div>
    )
}