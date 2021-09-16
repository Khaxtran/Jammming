import React from "react";

import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

    this.search = this.search.bind(this);
    this.handleTearmChange = this.handleTearmChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  handleTearmChange(event) {
    this.setState({term: event.target.value}); 
  }
 
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" 
                onChange={this.handleTearmChange}/>
        <button className="SearchButton" onClick={this.search}>SEARCH</button>
      </div>
    )
  }
}

export default SearchBar;
