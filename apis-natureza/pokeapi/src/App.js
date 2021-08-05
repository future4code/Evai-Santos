import axios from "axios";
import React from "react";
import "./index.css";

export default class app extends React.Component {

  state = {
    pokemons: [],
    picture: ""
  }

  componentDidMount(){
    this.getPokemons()
  }

  getPokemons = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"

    )
    this.setState({pokemons:response.data.results})

  }
   getPokePicture = async (event) => {
     console.log(event.target.value)
     const url = event.taget.value
     const response = await axios.get(`${url}`)
     this.setState({picture: response.data.sprites.front_default })

   }


  render() {
    console.log("Pokemons no estado:", this.state.pokemons)
    const pokeList = this.state.pokemons.map((poke) => {
      return (
        <option key={poke.name} value={poke.url}>
          {poke.name}
          </option>

      )
    })

    return (
      <div className="App">
        <h1>Pokemons</h1>
        <select onChange={this.getPokePicture}>
          <option>selecione um pokemon</option>
          {pokeList}</select>
        {this.state.picture &&
        <img src={this.state.picture} alt= 'foto do pokemon'></img>

  }

      </div>
    )
  }
}
