import React, { useState , useEffect} from "react";
import { ToastContainer , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./addstudent.css";
const AppSubject = () =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [subject, setSubject] = useState('');
    const [subjects, setSubjects] = useState([]); 
    useEffect(() => {
        const storedSubjects = JSON.parse(localStorage.getItem("subjects")) || [];
        setSubjects(storedSubjects);
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    
    const closeModal = () => {
        setIsModalOpen(false);
        setSubject('');
    };

    const addSubject = (e) => {
        e.preventDefault();
        if (subject.trim()) {
            // const formattedSubject = subjectName.charAt(0).toUpperCase() + subjectName.slice(1);
            // addSubject(formattedSubject);
            const newSubject = {
                id: Date.now(),
                name: subject
            };
            const updatedSubjects = [...subjects, newSubject];
            setSubjects(updatedSubjects); 
            localStorage.setItem("subjects", JSON.stringify(updatedSubjects)); 
            toast.success('Fanni muvafaqatli kiritdinggiz', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            closeModal(); 
        }
    };


    return (
        <div className="container" style={{ backgroundColor: '#E5E5E5' }}>
        
            <button onClick={openModal} className="addCanselbtn">Fan Qo'shish</button>


            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Fan Qo'shish</h2>
                        <form onSubmit={addSubject}>
                            <div className="form--card">
               <label htmlFor="task_title" className="w-50 d-block mx-auto">
                    <input type="text"
                        value={subject}
                        id="task_title"
                        onChange={(e => setSubject(e.target.value))}
                        placeholder="Fan nomini kiriting"
                    />
                </label>
               </div>
                            <div className="form--card mb-5">
                                <button className="form--card__btn" type="submit">Add Subject</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

<ToastContainer/>

            
        </div>
    );
}
export default AppSubject;