import { NavLink, useNavigate } from "react-router-dom";
import './user.css'

export const User = () => {
  const navigate =useNavigate();
  const onBack = () =>{
    navigate(-1)
}
    return (
        <div  className="container"  style={{
            backgroundColor:'#E5E5E5'
           }}>
            <button className="back--btn  pt-9 active" style={{
          marginTop:'20px'
         }} onClick={onBack}>onBack</button>
         <div  style={{
                    width: "100%",
                    

                }}>
            <h2 className="subjects-title">
                Fanlar:
            </h2> <hr />
            <NavLink to="/student">
            <ul style={
                {
                    marginLeft:"15px",
                    marginTop:"25px"
                }
            }>
                <li>
                <p className="subjects-text">
                Jismoniy tarbiya
            </p>
                </li>
            </ul>
            </NavLink>
         </div>
        </div>
    )
}