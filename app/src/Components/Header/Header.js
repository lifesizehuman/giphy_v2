import React from 'react'
import './Header.css'

class Header extends React.Component {

  searchGifs = () => {
    console.log("this is working")
    const queryURL = "https://api.giphy.com/v1/gifs/search?q=/"
    let searchQuery = document.getElementById("searchBox")
    const apiKey = "&api_key=dc6zaTOxFJmzC"

    if (!searchQuery) {
      searchQuery = "matt%20damon"
    }
    let images = [];
    let results = document.getElementById('results')

    fetch(queryURL + searchQuery + apiKey).then(res => res.json()).then((res) => {
      let searchResults = document.createElement("<p>");
      console.log("this is working too")
      console.log(res);
      for (var i = 0; i < res.data.length; i++) {
        let gif = res.data[i].images.downsized.url
        images.push(gif);
      }

      console.log(images);

      for (let j = 0; j < images.length; j++) {
        searchResults.append("<img src='" + images[i].src + "' />")
        results.append(searchResults)
      }
      console.log("this is also working")
    }, (error) => {
      console.log(error);
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
            <button type="button" onClick={this.searchGifs()} id="searchBtn" className="btn btn-dark">Search</button>
          </div>
        </div>
        <div id="results"/>
      </div>
    </section>)
  }
}

export default Header
