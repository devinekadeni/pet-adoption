import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

/* class component way */
class App extends React.Component {
  handleTitleClick() {
    alert('you clicked the title')
  }

  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
        <Pet name="Doink" animal="Cat" breed="Garfield" />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
