import { BrowserRouter, Route,  Routes } from "react-router-dom"
import { Header } from "./component/Header"
import { Card } from "./component/Page/card"
import './App.css'
import { StudentPage } from "./component/Page/sudentpageni"
import { Error } from "./component/Page/Error"
import { context } from "./context"
import { useState } from "react"
import { CoursePage } from "./component/Page/coursepage"
import { AddStudent } from "./component/addsudent"
import { Payment } from "./component/Page/payment/payment"
import { Auth } from "./component/Page/auth/auth"

function App() {

  const [mode, setMode] = useState(localStorage.getItem('them'));

  return (
   <context.Provider value={mode} >
    <BrowserRouter>
      <Header setMode={setMode} />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/student" element={ <StudentPage />} />
        <Route path="/course" element={ <CoursePage/>} />
        <Route path="/payment" element={<Payment />}/>
        <Route path="/addstudent" element={<AddStudent/>}/>
        <Route path="/auth/login" element={ <Auth/>}/>
        <Route path="*" element={<Error/>} />

      </Routes>
     
    </BrowserRouter>
    </context.Provider>
  )
}

export default App
