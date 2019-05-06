import React, { Component } from 'react'
import { ANIMALS } from 'petfinder-client'
import { connect } from 'react-redux'

import getBreeds from './actionCreators/getBreeds'
import changeBreed from './actionCreators/changeBreed'
import changeAnimal from './actionCreators/changeAnimal'
import changeLocation from './actionCreators/changeLocation'

class SearchBox extends Component {
  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            onChange={this.props.handleLocationChange}
            type="text"
            id="location"
            value={this.props.location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          animal
          <select
            id="animal"
            value={this.props.animal}
            onChange={this.props.handleAnimalChange}
            onBlur={this.props.handleAnimalChange}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          breed
          <select
            id="breed"
            value={this.props.breed}
            onChange={this.props.handleBreedChange}
            onBlur={this.props.handleBreedChange}
            disabled={this.props.breeds.length === 0}
          >
            <option />
            {this.props.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button onClick={this.props.search}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = ({ breed, breeds, animal, location }) => ({
  breed,
  breeds,
  animal,
  location,
})

const mapDispatchToProps = dispatch => ({
  handleAnimalChange(e) {
    dispatch(changeAnimal(e.target.value))
    dispatch(getBreeds())
  },
  handleBreedChange(e) {
    dispatch(changeBreed(e.target.value))
  },
  handleLocationChange(e) {
    dispatch(changeLocation(e.target.value))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox)
