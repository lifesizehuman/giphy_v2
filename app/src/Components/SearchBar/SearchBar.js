import React from 'react';
import ReactLogo from "./React.png"
import GiphyLogo from "./giphy.png"

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      term: ''
    }
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }

  render() {
    return (<div className="jumbotron">
      <div className='vertical-center'>
        <div id="rlogo" style={{ display: "inline-block" }}><img src={ReactLogo} /></div>
        <div id="glogo" style={{ display: "inline-block" }}><img src={GiphyLogo} /></div>
        <h1>React Giphy Search Tool</h1>
        <h2>by Slater Combes</h2>
        <div className="search">
          <input type="text" onChange={event => this.onInputChange(event.target.value)}/>
        </div>
      </div>
    </div>);
  }
}

export default SearchBar;
