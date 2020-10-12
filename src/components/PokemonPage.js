import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(pokemonArray => {
      this.setState({
        pokemon: pokemonArray
      })
    })
  }

  changeSearchTerm = (searchInput) => {
    this.setState({
      searchTerm: searchInput
    })
  }

  addPokemon = (newPokemon) => {
    let copyOfPokemon = [...this.state.pokemon, newPokemon]
    console.log("THIS IS THE COPY OF THE ARRAY", copyOfPokemon)
    this.setState({
      pokemon: copyOfPokemon
    })
  }

  render() {

    let {pokemon, searchTerm} = this.state

    let searchedArray = pokemon.filter(pokemonObj => {
      return pokemonObj.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search searchTerm={searchTerm} changeSearchTerm={this.changeSearchTerm}/>
        <br />
        <PokemonCollection pokemon={searchedArray}/>
      </Container>
    )
  }
}

export default PokemonPage
