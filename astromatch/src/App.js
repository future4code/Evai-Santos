import axios from "axios"
import React, {useState} from "react"
import { HomePage } from "./pages/HomePage/HomePage"
import { MatchsPage} from "./pages/MatchsPage/MatchsPage"






  const App = () => {
  const [currentPage, setCurrentPage]= useState("home")
  

    const changePage = () => {
    if (currentPage === "home") {
      setCurrentPage("matchs")
     } else {
       setCurrentPage("home")
     }
  }


const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/evai-santos/clear"




  const cleanMatchs = () => {
    axios.put(url)
    .then((res) => {
      alert("Limpeza completa!")
    })
    .catch((err) => {
      console.log(err.response)
    })
  }




  return (
  <div>
    {currentPage === "home" ? <HomePage /> : <MatchsPage />}
    <button onClick={changePage}>{currentPage === "home" ? "Ir para Matchs" : "Ir para Home"} </button>
    <button onClick={cleanMatchs}>Limpar Matchs</button>
    </div>

  )
  
}

export default App;

