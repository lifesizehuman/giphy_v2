import React from 'react'
import './Header.css'

const queryURL = "https://api.giphy.com/v1/gifs/search?q=/"
let searchQuery = document.getElementById("searchBox")
const apiKey = "&api_key=dc6zaTOxFJmzC"

const searchGifs = function() {
  console.log("this is working")

  if (!searchQuery) {
    searchQuery = "matt%20damon"
  }
  let gifs = [];
  let results = document.getElementById('results')

  fetch(queryURL + searchQuery + apiKey).then(res => res.json()).then((res) => {
    console.log("this is working too")
    console.log(res);
    for (var i = 0; i < res.data.length; i++) {
      let gif = res.data[i].images.downsized.url
      gifs.push(gif);
    }
  }).then(() => {
    console.log(gifs);
    for (var j = 0; j < gifs.length; j++) {
      results.append("<img src='" + gifs[j] + "' />")
    }
    console.log(results)
    console.log("this is also working")
  }, (error) => {
    console.log(error);
  })
}

class Header extends React.Component {
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
        <div id="results"></div>
      </div>
    </section>)
  }
}

export default Header
