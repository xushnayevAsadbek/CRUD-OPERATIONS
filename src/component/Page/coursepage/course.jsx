import { useNavigate } from "react-router-dom"

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
       </div>   
    )
}