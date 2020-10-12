import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  }

  handleFormInput = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    // debugger
    evt.preventDefault()
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: evt.target.name.value,
        hp: evt.target.hp.value,
        sprites: {
          front: evt.target.frontUrl.value,
          back: evt.target.backUrl.value
        }
      })
    })
    .then(response => response.json())
    .then(newPokemon => {
      console.log("THIS IS THE NEW POKEMON", newPokemon)
      console.log("THIS IS THE FORM PROPS:", this.props.addPokemon)
      this.props.addPokemon(newPokemon)
    })
  }

  render() {
    let {name, hp, frontUrl, backUrl} = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={this.handleFormInput} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={this.handleFormInput} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={frontUrl} onChange={this.handleFormInput} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={backUrl} onChange={this.handleFormInput} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
