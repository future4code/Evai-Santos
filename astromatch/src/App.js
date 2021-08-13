import React, {useState, useEffect} from "react"
import { HomePage } from "./pages/HomePage/HomePage"
import { MatchsPage } from "./pages/MatchsPage/MatchsPage"
import {ProfileListItem} from "./components/ProfileListItem/ProfileListItem"




export default function App ()  {
  const [telaAtual, setTelaAtual]= useState("Home")
  

    const escolherTela = () => {
  switch (telaAtual) {
    case "Home":
      return <HomePage />
      case "Match":
      return <MatchsPage />
      default:
        return <HomePage />

  }
}

  const mudaTela = (nomeTela) => {
  setTelaAtual(nomeTela)
}




  return (
  <div>
    <button onClick={()=>mudaTela("Home")} >Home</button>
    <button onClick={()=>mudaTela("Match")}>Match</button>
    {escolherTela()}</div>

  )
  
}

