import { BrowserRouter, Route,  Routes } from "react-router-dom"
import { Header } from "./component/Header"
import { Card } from "./component/Page/card"
import './App.css'
import { StudentPage } from "./component/Page/studentpageni"
import { Error } from "./component/Page/Error"

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/student" element={ <StudentPage />} />
        <Route path="*" element={<Error/>} />

      </Routes>
     
    </BrowserRouter>
  )
}

export default App
