import { useNavigate } from "react-router-dom"

export const StudentPage = () => {
    const navigate =useNavigate();
    const onBack = () =>{
        navigate(-1)
    }
    return(
       <div className="container">
       student  defbg
       <button onClick={onBack}>onBack</button>
       </div>   
    )
}