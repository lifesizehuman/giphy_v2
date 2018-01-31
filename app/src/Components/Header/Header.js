import React from 'react'
import './Header.css'

class Header extends React.Component {
  render() {
    return (<section>
      <div className='jumbotron'>
        <div className='vertical-center'>
          <h1>Giphy Search Tool</h1>
          <h2>by Slater Combes</h2>
          <div className="form-group">
            <input className="form-control form-control-lg" id="searchBox" type="text" placeholder="Search and Press Enter" />
          <br />
            <button type="button" id="searchBtn" className="btn btn-dark">Search</button>
          </div>
        </div>
      </div>
    </section>)
  }
}

export default Header
