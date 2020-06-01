import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery: this.props.searchQuery
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <label htmlFor="search">Search</label>
          <input id="search" name="search" type="text" placeholder="Search here..." value={this.props.searchQuery} onChange={this.props.handleInputChange}/>
        </form>
      </div>
    )
  }
}

export default SearchBar;