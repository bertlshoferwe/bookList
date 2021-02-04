import React, { Component } from 'react';
import './App.scss';
import data from './data/data';
import MaterialIcon from 'material-icons-react';
import BookCover from './components/bookCover';
import CartList from './components/cartList';

class App extends Component {
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

  handleChange(e) {

    this.setState({
      searched: e.target.value
    });

  }

  render() {

    const clearShelf = ( this.state.cart.length > 0 )? <button onClick={ this.clearCart } > Clear Shelf </button> : <div> Looks like you forgot something, quick add something to your book shelf</div>;

    return (
      <div className='contentWrapper'>

        <div className='nav'>

          <div className='logo'>
            <span className='book material-icons'>
              book
            </span>
            <div className='wordLogo'> BookList </div>
          </div>
          <a className='navIcon'>
            <span className='icon material-icons'>
              home
            </span>
            <div> Home </div>
          </a>
          <a className='navIcon'>
            <span className='icon material-icons'>
              shopping_cart
            </span>
            <div> Cart </div>
          </a>

        </div>

        <div className='content'>

          <div className='search'>

            <div className='inputWrapper'>

              <input name="search" onChange={ (e) => {this.handleChange(e); } } value={this.state.searched} className='searchInput' placeholder='Find a book' />

              {/* only display x if charters exist in input */}

              { (this.state.searched)? <a onClick={ this.clearSearched } className='searchButton' > X </a> : <div></div> }

            </div>

          </div>

          <div className='bookWrapper'>

            <BookCover data={ this.state.data } query={this.state.searched} addToCart={ this.addToCart } />

            {/* <div className='cart'>

              <h2> Your Shelf</h2>

              {clearShelf}

              <CartList data={ this.state.cart } />

            </div> */}

          </div>


        </div>


      </div>
    );
  }
}



export default App;

