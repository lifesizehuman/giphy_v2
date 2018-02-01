import React, {Component} from 'react'
import './Header.css'
import Container from '../Container'
import Row from '../Row'
import Col from '../Col'

class Header extends React.Component {

  getGifs = () => {
    const queryURL = "https://api.giphy.com/v1/gifs/search?q=/"
    let searchQuery = document.getElementById("searchBox").value
    const apiKey = "&api_key=dc6zaTOxFJmzC"

    console.log("this is working")
    console.log(searchQuery)

    if (!searchQuery) {
      searchQuery = "matt%20damon"
    }

    let results = document.getElementById('results')
    let gifs = [];

    fetch(queryURL + searchQuery + apiKey).then(results => {
      return results.json()
    }).then((data) => {
      const arr = data.data
      console.log(arr)

      const GifItem = (image, i) => {
        return (<li>
          <img src={image.JSON.stringify(arr[i].images.downsized.url)}/>
        </li>)
      };

      const GifList = (props) => {
        const gifItems = props.gifs.map((image) => {
          return <GifItem key={image.id} gif={image}/>
        });

        return (<ul>{gifItems}</ul>);
      };

      // const pushed = arr.map((gif, i) => gifs.push(JSON.stringify(arr[i].images.downsized.url)))
      // const giphs = gifs.map((img, j) => results.append("<img src=" + gifs[j] + "/>"))

      console.log("this is working too")
    })
  }

  render() {
    return (<section>
      <div className='jumbotron' id="random">
        <div className='vertical-center'>
          <h1>React Giphy Search Tool</h1>
          <h2>by Slater Combes</h2>
          <div className="form-group">
            <input className="form-control form-control-lg" id="searchBox" type="text" placeholder="Search for Gifs Here"/>
            <br/>
            <button type="submit" className="btn btn-dark" onClick={this.getGifs}>Get Gifs</button>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col size="12">
            <div id="searchResults">
              <div id="results">
                
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>)
  }
}

export default Header
