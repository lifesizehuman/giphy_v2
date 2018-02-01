import React, {Component} from 'react'
import './Header.css'

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: []
    }
  }


    searchGifs = () => {
      const queryURL = "https://api.giphy.com/v1/gifs/search?q=/"
      let searchQuery = document.getElementById("searchBox")
      const apiKey = "&api_key=dc6zaTOxFJmzC"

      console.log("this is working")

      if (!searchQuery) {
        searchQuery = "matt%20damon"
      }

      let gifs = [];
      let searchResults = document.getElementById('searchResults')
      let results = document.getElementById('results')

      fetch(queryURL + searchQuery + apiKey).then(results => {

        return results.json()
      }).then((data) => {
        console.log(data)

        for (var j = 0; j < 25; j++) {
          let giphy = document.getElementById('giphy').innerHTML = JSON.stringify(data.data[j].images.downsized.url)
          gifs.push(giphy)
          results = (<img src={giphy[j]}/>)
        }
      })
    }


  render() {
    return (<section>
      <div className='jumbotron'>
        <div className='vertical-center'>
          <h1>Giphy Search Tool</h1>
          <h2>by Slater Combes</h2>
          <div className="form-group">
            <input className="form-control form-control-lg" id="searchBox" type="text" placeholder="Search and Press Enter"/>
            <br/>
            <button type="button" onClick={searchGifs} id="searchBtn" className="btn btn-dark">Search</button>
          </div>
        </div>
        <div id="searchResults">
          <div id="results">
            <div id="giphy"></div>
          </div>
        </div>
      </div>
    </section>)
  }
}
export default Header
