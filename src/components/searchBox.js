import React, { Component } from 'react';
import '../App.scss';

class SearchBox extends Component {

  render() {


    return (

      <div className='search'>

        <div className='inputWrapper'>

          <input name="search" onChange={ (e) => {this.props.handleChange(e); } } value={this.props.searched} className='searchInput' placeholder='Find a book' />

          {/* only display x if charters exist in input */}

          { (this.props.searched)? <a onClick={ this.props.clearSearched } className='searchButton' > X </a> : <div></div> }

        </div>

      </div>
    );
  }
}



export default SearchBox;

