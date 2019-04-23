import React, { Component } from 'react'
import pf, { ANIMALS } from 'petfinder-client'

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
})

class SearchParams extends Component {
  state = {
    location: 'Seattle, WA',
    animal: '',
    breed: '',
    breeds: [],
  }

  handleLocationChange = e => {
    this.setState({ location: e.target.value })
  }

  handleAnimalChange = e => {
    this.setState(
      {
        animal: e.target.value,
      },
      this.getBreeds
    )
  }

  handleBreedChange = e => {
    this.setState({
      breed: e.target.value,
    })
  }

  getBreeds() {
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal }).then(data => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          this.setState({ breeds: data.petfinder.breeds.breed })
        } else {
          this.setState({ breed: [] })
        }
      })
    } else {
      this.setState({ breeds: [] })
    }
  }

  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            onChange={this.handleLocationChange}
            type="text"
            id="location"
            value={this.state.location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          animal
          <select
            id="animal"
            value={this.state.animal}
            onChange={this.handleAnimalChange}
            onBlur={this.handleAnimalChange}
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
            value={this.state.breed}
            onChange={this.handleBreedChange}
            onBlur={this.handleBreedChange}
            disabled={this.state.breeds.length === 0}
          >
            <option />
            {this.state.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
      </div>
    )
  }
}

export default SearchParams
