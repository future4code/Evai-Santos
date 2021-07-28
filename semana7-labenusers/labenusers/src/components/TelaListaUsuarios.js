import axios from "axios"
import React from "react"
import styled from "styled-components"

const CardUsuario = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width:300px;
justify-content: space-between;
display:flex;
`



export default class TelaListaUsuarios extends React.Component{

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }
   
    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "evai.santos-lovelace"
            }
        })
        
        .then((res) => {
            this.setState({usuarios: res.data})

        })
        .catch((err) => {
            alert("tente novamente")

        })

    }

    // deletarUsuario = (id) => {
    //     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id`
    //     axios.delet

    // }



    render() {
        console.log(this.state.usuarios)
        const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUsuario key={user.id}>
                {user.name}
                <button>X</button>
                </CardUsuario>

        })

        return(
            <div>
                <button onClick={this.props.irParaCadastro}> Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}

            </div>
        )
    }
}
