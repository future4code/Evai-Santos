import { match } from "minimatch"
import React from "react"
import { HomePage } from "./pages/HomePage/HomePage"
import { MatchsPage } from "./pages/MatchsPage/MatchsPage"



export default class App extends React.Component {
  state = {
    telaAtual: "Home"
  }

escolherTela = () => {
  switch (this.state.telaAtual) {
    case "Home":
      return <HomePage />
      case "Match":
      return <MatchsPage />
      default:
        return <HomePage />

  }
}

mudaTela = (nomeTela) => {
  this.setState({telaAtual:nomeTela})
}


render() {

  return <div>
    <button onClick={()=>this.mudaTela("Home")} >Home</button>
    <button onClick={()=>this.mudaTela("Match")}>Match</button>
    {this.escolherTela()}</div>

}
  
}

