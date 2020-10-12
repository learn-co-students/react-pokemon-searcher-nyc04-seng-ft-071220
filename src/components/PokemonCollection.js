import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {

    let arrayOfCards = this.props.pokemon.map(pokemonObj => {
      return <PokemonCard 
      key={pokemonObj.name}
      pokemon={pokemonObj}/>
    })

    return (
      <Card.Group itemsPerRow={6}>
        {/* <h1>Hello From Pokemon Collection</h1> */}
        {arrayOfCards}
      </Card.Group>
    )
  }
}

export default PokemonCollection
