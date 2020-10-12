import React from 'react'

const Search = props => {

  const handleInput = (evt) => {
    props.changeSearchTerm(evt.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type="text"
        className="prompt"
        value={props.searchTerm}
        onChange={handleInput}
        />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
