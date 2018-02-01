import React from 'react';

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
