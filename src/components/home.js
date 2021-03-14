import React, { Component } from 'react';
import '../App.scss';
import data from '../data/data';
import SearchBox from './searchBox';
import BookCover from './bookCover';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      cart:[],
      data: [],
      searched:''
    };

    this.addToCart = this.addToCart.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.clearSearched = this.clearSearched.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);

  }

  componentDidMount(){
    this.setState({
      data: data,
    } );
  }

  addToCart(newBook) {

    this.setState({
      cart: [...this.state.cart, newBook]
    });

  }

  clearCart() {

    this.setState({
      cart: []
    });

  }

  clearSearched() {

    this.setState({
      searched: ''
    });

  }

  handleSearchChange(e) {

    this.setState({
      searched: e.target.value
    });

  }


  render() {
    // console.log(this.state.cart);
    return (
      <div className='contentWrapper'>

        <div className='content'>

          <SearchBox
            handleChange={this.handleSearchChange}
            searched={this.state.searched}
            clearSearched={this.clearSearched} />

          <div className='bookWrapper'>

            <BookCover
              data={ this.state.data }
              query={this.state.searched}
              addToCart={ this.addToCart }
              modelOpen={ this.modelOpen }/>

          </div>


        </div>


      </div>
    );
  }
}



export default Home;

