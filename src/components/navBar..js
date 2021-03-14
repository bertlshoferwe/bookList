import React, { Component } from 'react';
import '../App.scss';

class Nav extends Component {


  render() {


    return (

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


    );
  }
}



export default Nav;

