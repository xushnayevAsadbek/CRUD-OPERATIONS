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

            <div>
            <form className="form" >
                <label htmlFor="task_title" className="w-50 d-block mx-auto">
                    <p>Enter task name</p>
                    <input type="text"
                        id="task_title"
                        
                    />
                </label>
                <label htmlFor="task_email" >
                    <p>Enter task email</p>
                    <input type="email"
                        required
                        id="task_email"
                       
                        
                    />
                </label>
                <label htmlFor="task_phone">
                    <p className="text-primary fw-bold text-uppercase">Enter task phone</p>
                    <input type="tel"
                        required
                        id="task_phone"
                        className="form-control p-3 w-100"
                        
                    />
                </label>

                <label htmlFor="task_date">
                    <p className="text-primary fw-bold text-uppercase">Enter task date</p>
                    <input type="date"
                        required
                        id="task_date"
                        
                       
                    />
                </label>
                <button >Add new task  </button>
            </form>
            </div>
        </div>
    )
}