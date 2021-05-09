//  import logo from './cart.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {

          id: 1,
          image: './products/cologne.jpg',
          desc: 'Unisex Cologne',
          value: 0
        },
        {
          id: 2,
          image: './products/iwatch.jpg',
          desc: 'Apple iWatch',
          value: 0
        },
        {
          id: 3,
          image: './products/mug.jpg',
          desc: 'Unique Mug',
          value: 0
        },
        {
          id: 4,
          image: './products/wallet.jpg',
          desc: 'Mens Wallet',
          value: 0

        }
      ]
    }

  }
  render() {
    return (
      <div className="App">
        <header className="App-header ps-5 pe-5">
          <h1>Shop to react</h1>
          <div>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="ps-2">0 item</span>
          </div>
        </header>
        <DisplayProducts products={this.state.products} />
      </div>
    );
  }
}
function DisplayProducts(props) {
  return (
    <div >
      {props.products.map(product => {
        return (
          <div className="card" key={product.id}>
            <h3 className="text-start mt-4 ms-5 me-4 mb-2">{product.desc}</h3>
            <div className="row p-2 align-middle">
              <img
                alt={product.desc}
                src={product.image}
                width="50px"
                className="col-6 col-md-4 mt-1 ms-4 me-4 mb-2"
              />
              <p className="col-sm-6 col-md-8 align-self-center text-start">
                <span className="border border-2 p-3">{product.value} </span>
                 quantity
              </p>
            </div>
          </div>
        );
        
      })}
    </div>
  )
}

export default App;
