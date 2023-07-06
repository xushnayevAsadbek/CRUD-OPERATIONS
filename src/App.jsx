import { BrowserRouter, Route,  Routes } from "react-router-dom"
import { Header } from "./component/Header"
import { Card } from "./component/Page/card"
import './App.css'
import { StudentPage } from "./component/Page/studentpageni"
import { Error } from "./component/Page/Error"
import { context } from "./context"
import { useState } from "react"

function App() {

  const [mode, setMode] = useState(localStorage.getItem('them'));

  return (
   <context.Provider value={mode} >
    <BrowserRouter>
      <Header setMode={setMode} />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/student" element={ <StudentPage />} />
        <Route path="*" element={<Error/>} />

      </Routes>
     
    </BrowserRouter>
    </context.Provider>
  )
}

export default App
