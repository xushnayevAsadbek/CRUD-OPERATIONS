import "./sudent.css"
import { useNavigate } from "react-router-dom"
// import AddStudent from "../../addsudent/addStudent";
import edit from '../../../../public/pen.svg';
import delet from '../../../../public/trash.svg';

export const StudentPage = ({task, name , email, phone , date}) => {
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
       
       <div className="shadow p-5 w-75 mx-auto">

<table className="table" >
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
                <AddStudent>

                
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.enrol}</td>
            <td>{item.date}</td>
            <td><button onClick={() => editTask(item.id)} className="edit--btn "><img src={edit} alt="pen-icon" /></button></td>
            <td><button type="sumbit" onClick={() => removeTask(item.id)} className="edit--btn"><img src={delet} alt="delet icon" /></button></td>
        </tr>
        </AddStudent>
            )
        }) }

    </tbody>
</table>

</div>
       </div>   
    )
 }
