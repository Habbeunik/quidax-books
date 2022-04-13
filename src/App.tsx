import React from "react";
import logo from "./logo.svg";
import search from "./search.svg";
import cart from "./cart.svg";
import books from "./books.svg";
import people from "./people.svg";
import like from "./like.svg";
import rating from "./rating.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-logoSection">
          <img src={logo} alt="logo" />
          <h3>Quidax Books</h3>
        </div>
        <div className="Header-actionSectionMobile">
          <img className="Header-actionMobile" src={search} alt="search" />
          <img className="Header-actionMobile" src={books} alt="search" />
          <img className="Header-actionMobile" src={cart} alt="search" />
        </div>
      </header>
      <section className="Slider">
        <div className="BookCover"></div>
        <div className="BookCover"></div>
        <div className="BookCover"></div>
      </section>
      <main className="BookList">
        <h4 className="Headline">All Books</h4>
        <div className="BookItem">
          <div className="BookItem-image" />
          <div className="BookItem-details">
            <h5 className="BookItem-title">The Effective Engineer</h5>
            <p className="BookItem-text">Edmond Lau - 2009</p>
            <p className="BookItem-text">Motivational</p>
            <div className="BookItem-actions">
              <div className="BookItem-actionItem">
                <img src={people} alt="people" />
                <p className="BookItem-text">31</p>
              </div>
              <div className="BookItem-actionItem">
                <img src={like} alt="people" />
                <p className="BookItem-text">31</p>
              </div>
              <div className="BookItem-actionItem">
                <p className="BookItem-text">Rating: 4.0</p>
                <img src={rating} alt="people" />
              </div>
            </div>
            <div className="flex">
              <p className="BookItem-text">$29.99</p>
              <p className="BookItem-text BookItemCopyText">
                23 Copies Available
              </p>
            </div>
            <button className="BookAddToCart">
              <img src={cart} alt="cart" />
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
