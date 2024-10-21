import { useState  } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./addstudent.css"
import AppSubject from "./addsubject";

export const AddStudent = () =>{

    const navigate =useNavigate();
    const onBack = () =>{
        navigate(-1)
    }
    const [task, setTask] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [enrol, setEnrol] = useState('');
   
   
    const addTask = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            name: name,
            email: email,
            phone: phone,
            enrol:enrol,
    }
    const storedTasks = JSON.parse(localStorage.getItem("students")) || [];
    const updatedTasks = [...storedTasks, newTask];
    localStorage.setItem("students", JSON.stringify(updatedTasks));

    navigate("/student", { state: newTask });

    setTask([...task , newTask])
    console.log(newTask);
    console.log(task);
    setName('');
    setEmail('')
    setPhone('')
    setEnrol('')

}
// localStorage.setTask('task', JSON.stringify(task));
    return(
        <div className="container" style={{
            backgroundColor:'#E5E5E5'
           }}>
            <h2 className="sudetnt-page--add">
            </h2>

            <button className="addCanselbtn" onClick={onBack}>onBack</button>
            <AppSubject/>

            <div>
            <form className="form" onSubmit={(e)=>addTask(e)} >
               <div className="form--card">
               <label htmlFor="task_title" className="w-50 d-block mx-auto">
                    <p>Mavzu nomi:</p>
                    <input type="text"
                        id="task_title"
                        value={name}
                        onChange={(e => setName(e.target.value))}
                        placeholder="Mavzuni kiriting:"
                    />
                </label>
               </div>
               <div className="form--card">
                <label htmlFor="task_email" >
                    <p>Document file:</p>
                    <input type="file"
                        required
                        id="task_email"
                        value={email}
                        onChange={(e => setEmail(e.target.value))}
                        
                    />
                </label>
                </div>
               <div className="form--card">
               <label htmlFor="task_phone">
                    <p className="text-primary fw-bold text-uppercase">PPT file:</p>
                    <input type="file"
                        required
                        id="task_phone"
                        value={phone}
                        onChange={(e => setPhone(e.target.value))}
                        
                    />
                </label>
               </div>
                <div className="form--card">
                <label htmlFor="task_enroll">
                    <p className="text-primary fw-bold text-uppercase">Videoni</p>
                    <input type="file"
                        required
                        id="task_enroll"
                        value={enrol}
                        accept="video/*"
                        onChange={(e => setEnrol(e.target.value))}          
                    />
                </label>
                </div>
              <div className="form--card mb-5">
              <button  className="form--card__btn" type="sumbit" onChange={()=>newTask()}>Add new task </button>
              </div>
            </form>
            </div>
            
            {/* {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Add Student</h2>
                        <form className="form" onSubmit={addTask}>
                            <div className="form--card">
                                <label htmlFor="task_title" className="w-50 d-block mx-auto">
                                    <p>Mavzu nomi:</p>
                                    <input type="text"
                                        id="task_title"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Mavzuni kiriting:"
                                    />
                                </label>
                            </div>
                            <div className="form--card">
                                <label htmlFor="task_email">
                                    <p>Document file:</p>
                                    <input type="file"
                                        required
                                        id="task_email"
                                        onChange={(e) => setEmail(e.target.files[0])}
                                    />
                                </label>
                            </div>
                            <div className="form--card">
                                <label htmlFor="task_phone">
                                    <p className="text-primary fw-bold text-uppercase">PPT file:</p>
                                    <input type="file"
                                        required
                                        id="task_phone"
                                        onChange={(e) => setPhone(e.target.files[0])}
                                    />
                                </label>
                            </div>
                            <div className="form--card">
                                <label htmlFor="task_enroll">
                                    <p className="text-primary fw-bold text-uppercase">Videoni</p>
                                    <input type="file"
                                        required
                                        id="task_enroll"
                                        onChange={(e) => setEnrol(e.target.files[0])}
                                    />
                                </label>
                            </div>
                            <div className="form--card mb-5">
                                <button className="form--card__btn" type="submit">Add new task</button>
                            </div>
                        </form>
                    </div>
                </div>
            )} */}

        </div>
    );
}
