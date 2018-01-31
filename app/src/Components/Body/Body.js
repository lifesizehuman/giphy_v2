import React from 'react'
import './Body.css'
import Header from '../Header'
import Results from "../Results"


class Body extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <Results />
      </section>
    )
  }
}

export default Body
