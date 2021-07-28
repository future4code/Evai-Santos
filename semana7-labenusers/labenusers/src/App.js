
import React from "react"
import TelaCadastro from "./components/TelaCadastro"
import TelaListaUsuarios from "./components/TelaListaUsuarios"

export default class App extends React.Component {
    state = {
        telaAtual: "cadastro"
    }

    escolherTela = () => {
        switch (this.state.telaAtual){
            case "cadastro":
            return <TelaCadastro irParaLista={this.irParaLista}/>
            case "lista":
                return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
                default:
                    return <div>Erro! Página não encontrada </div>

        }
        
    }

    irParaCadastro = () => {
        this.setState({telaAtual: "Cadastro"})

    }

    
    irParaLista = () => {
        this.setState({telaAtual: "Lista"})

    }


    render(){
        return (
            <div>
             {this.escolherTela}
             <h1>teste</h1>
             
            </div>
        )
    }

}


