import React, { Component } from 'react'

class Carousel extends Component {
  state = {
    photos: [],
    active: 0,
  }

  static getDerivedStateFromProps({ media }) {
    let photos = []

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo['@size'] === 'pn')
    }

    return { photos }
  }

  handleIndexClick = e => {
    this.setState({ active: +e.target.dataset.index })
  }

  render() {
    const { photos, active } = this.state

    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            /* eslint-disable-next-line */
            <img
              onClick={this.handleIndexClick}
              key={photo.value}
              data-index={index}
              src={photo.value}
              alt="animal thumbnail"
              className={index === active ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel
