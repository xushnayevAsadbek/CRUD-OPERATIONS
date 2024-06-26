import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { Header } from "./component/Header"
import { Card } from "./component/Page/card"
import './App.css'
import { StudentPage } from "./component/Page/sudentpageni"
import { Error } from "./component/Page/Error"
import { context } from "./context"
import { useEffect, useState } from "react"
import { CoursePage } from "./component/Page/coursepage"
import { AddStudent } from "./component/addsudent"
import { Payment } from "./component/Page/payment/payment"
import { Auth } from "./component/Page/auth/auth"
import { Layout } from "./component/Page/Layout/Layout"
import { User } from "./component/Page/user"
import { useGuard } from "./component/hooks/useAuthGuard"
import { Setting } from "./component/Page/setting"


function App() {

  
  const isAuth = useGuard();
  // const {pathname} = useLocation();
  //   const navigate = useNavigate();
  // const [mode, setMode] = useState(localStorage.getItem('them'));
  useEffect(() => {
      
    if (! isAuth) {
        // navigate("/auth/login");
    }
}, []);

  return (
    //  <contex value={mode} >
    <BrowserRouter>
      {/* <Header /> */}
      
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Card />} />
          <Route path="student" element={<StudentPage />} />
          <Route path="student" element={<StudentPage />} />
          <Route path="course" element={<CoursePage />} />
          <Route path="payment" element={<Payment />} />
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="user" element={<User />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        <Route path="/auth/login" element={<Auth />} />
        <Route path="*" element={<Error />} />

      </Routes>
      

    </BrowserRouter>
    //  </contex>
  )
}

export default App
