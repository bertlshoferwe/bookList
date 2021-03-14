import React, { Component } from 'react';
import '../App.scss';

class BookCover extends Component {
  constructor() {
    super();
  }

  render() {

    const { data, addToCart, query } = this.props;

    return (
      <div className='coverWrapper'>
        {
          data
            .filter(d => (d.title.toLowerCase()).includes(query.toLowerCase()))
            .map(filteredData => (
              <div key={ filteredData.id } className='cover' >
                <div className='coverImageWrapper'>
                  <img className='coverImage' src={ filteredData.img } alt={ filteredData.title } onClick={ () => {} } />
                  <div className='viewMore'>View More</div>
                </div>
                <div className='Buttons'>
                  <div
                    className='addToCart material-icons'
                    onClick={ () => { addToCart(filteredData); } }>
                    add_shopping_cart
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    );
  }
}



export default BookCover;

