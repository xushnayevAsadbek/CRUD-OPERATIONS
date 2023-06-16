import { BrowserRouter, Route, Router } from "react-router-dom"
import { Header } from "./component/Header"
import { Card } from "./component/Page/card"
import './App.css'
import { StudentPage } from "./component/Page/studentpageni"

function App() {


  return (
    <>
      <Header />
      <Card />
      <StudentPage />
    </>
  )
}

export default App
