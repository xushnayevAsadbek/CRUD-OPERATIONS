import { useState  } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import edit from '../../../public/pen.svg';
import delet from '../../../public/trash.svg';
import "./addstudent.css"

export const AddStudent = () =>{

    const navigate =useNavigate();
    const onBack = () =>{
        navigate(-1)
    }

    const [task, setTask] = useState(() => {
        const saveTask = localStorage.getItem('task');
        return saveTask ? JSON.parse(saveTask) : [];
    });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [enrol, setEnrol] = useState('');
    const [date, setDate] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            name: name,
            email: email,
            phone: phone,
            enrol:enrol,
            date: date,        
    }

    setTask([...task , newTask])
    console.log(newTask);
    console.log(task);
    setName('');
    setEmail('')
    setPhone('')
    setEnrol('')
    setDate('')

}
const removeTask = id => {
    let filterTask = task.filter(item => item.id !== id)

    setTask(filterTask);
    toast.info(`You have deleted your information`, {
        autoClose: 1000,
    })
    clearForm()

}

const editTask = (id) => {
    const updatedName = prompt('Yangi ismni kiriting:', task.find(item => item.id === id).name);
    const updatedEmail = prompt('Yangi emailni kiriting:', task.find(item => item.id === id).email);
    const updatedPhone = prompt('Yangi telefon raqamini kiriting:', task.find(item => item.id === id).phone);
    const updatedEnrol = prompt('Yangi ta\'lim yo\'nalishini kiriting:', task.find(item => item.id === id).enrol);
    const updatedDate = prompt('Yangi kirish sanasini kiriting:', task.find(item => item.id === id).date);

    if (updatedName !== null && updatedEmail !== null && updatedPhone !== null && updatedEnrol !== null && updatedDate !== null) {
        const updatedTasks = task.map(item => (
            item.id === id ? { ...item, name: updatedName, email: updatedEmail, phone: updatedPhone, enrol: updatedEnrol, date: updatedDate } : item
        ));
        setTask(updatedTasks);
        toast.success('Your information has been updated', {
            autoClose: 1000,
        });
    }
    
}

const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setEnrol('');
    setDate('');
}

useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task));
}, [task]);
    return(
        
        <div className="container" style={{
            backgroundColor:'#E5E5E5'
           }}>
            <h2 className="sudetnt-page--add">
            </h2>

            <button className="addCanselbtn" onClick={onBack}>onBack</button>

            <div>
            <form className="form" onSubmit={(e)=>addTask(e)} >
               <div className="form--card">
               <label htmlFor="task_title" className="w-50 d-block mx-auto">
                    <p>Enter task name</p>
                    <input type="text"
                        id="task_title"
                        value={name}
                        onChange={(e => setName(e.target.value))}
                        
                    />
                </label>
               </div>
               <div className="form--card">
                <label htmlFor="task_email" >
                    <p>Enter task email</p>
                    <input type="email"
                        required
                        id="task_email"
                        value={email}
                        onChange={(e => setEmail(e.target.value))}
                    />
                </label>
                </div>
               <div className="form--card">
               <label htmlFor="task_phone">
                    <p className="text-primary fw-bold text-uppercase">Enter task phone</p>
                    <input type="tel"
                        required
                        id="task_phone"
                        value={phone}
                        name="phone"
                        placeholder="+998"
                        pattern="[+]?[0-9]{3} [(][0-9]{2}[)] [0-9]{3}-[0-9]{2}-[0-9]{2}"
                        onChange={(e => setPhone(e.target.value))}
                    />
                </label>
               </div>
                <div className="form--card">
                <label htmlFor="task_enroll">
                    <p className="text-primary fw-bold text-uppercase">Enter task enroll</p>
                    <input type="number"
                        required
                        id="task_enroll"
                        value={enrol}
                        onChange={(e => setEnrol(e.target.value))}  
                    />
                </label>
                </div>
               <div className="form--card">
               <label htmlFor="task_date">
                    <p className="text-primary fw-bold text-uppercase">Enter task date</p>
                    <input type="date"
                        required
                        id="task_date"
                        value={date}
                        onChange={(e => setDate(e.target.value))}                   
                    />
                </label>
               </div>
              <div className="form--card">
              <button  className="form--card__btn" type="sumbit" onChange={()=>newTask()}>Add new task  </button>
              </div>
            </form>
            </div>
            <div className="shadow p-5 w-75 mx-auto">

<table className="table" style={{
    marginBottom:'25px'
}} >
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Enrol Number</th>
            <th>Date of admission </th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody >
        {task?.map((item)=>{
            return(
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.enrol}</td>
            <td>{item.date}</td>
            <td><button onClick={() => editTask(item.id)} className="edit--btn "><img src={edit} alt="pen-icon" /></button></td>
            <td><button type="sumbit" onClick={() => removeTask(item.id)} className="edit--btn"><img src={delet} alt="delet icon" /></button></td>
        </tr>
            )
        }) }

    </tbody>
</table>
<ToastContainer />
</div>
        </div>
    )
}