import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  // makes card display the front (true) first
  state = {
    display: true
  }

  handleDisplayClick = (evt) => {
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    let {name, hp} = this.props.pokemon
    return (
      <Card onClick={this.handleDisplayClick}>
        <div>
          <div className="image">
            { 
              this.state.display
              ?
              <img src={this.props.pokemon.sprites.front} alt="oh no!" />
              :
              <img src={this.props.pokemon.sprites.back} alt="oh no!" />
            }
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {/* POKEMON HP HERE hp */}
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
