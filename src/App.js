import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Animated } from "react-animated-css";
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  return (
    <Animated animationIn="fadeIn slower" isVisible={true}>
      <div className="App">
        <div class="fixed-top">
          <div class="navbar">
            <div class="navmenu">
              <ul>
                <li><a class='no-link' href="#">SHOP</a>
                  <ul class="megamenu">
                    <li>
                      <h1>Apparrel</h1>
                      <a href="#">T-Shirts</a>
                      <a href="#">Sweaters</a>
                      <a href="#">Coats</a>
                      <a href="#">Jackets</a>
                      <a href="#">Pants</a>
                      <a href="#">Shorts</a>
                      <a href="#">Jeans</a>
                    </li>
                  </ul>
                </li>
                <li><a class='no-link' href="#">ABOUT</a></li>
                <li><a class='no-link' href="#">HELP</a></li>
                <div class="logo">
                  <img src={require('./images/bespokeLogow.png')} />
                </div>
                <li><a class='no-link' href="#">LOGIN</a></li>
                <li><a class='no-link' href="#"><i className="fa fa-shopping-bag fa-lg"></i></a></li>
                <li><a class='no-link' href="#"><i className="fa fa-search fa-lg"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <br></br>
        <div class="indexwrap">
          <div class="discoverwrap">
            <div class="headlinebox">
              <div class="headlinetxt">
                <h1>Shop Our Latest Winter Arrivals</h1>
                <div class="headlinesub">
                  <p>Dress (adjective) this season with new arrivals from Maison Margiela, Rick Owens, Burberry, and more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br></br>

        <div class="indexwrap">
          <div class="discoverwrap">
            <div class="headlinebox">
              <div class="headlinetxt">
                <h1>Shop Our Latest Winter Arrivals</h1>
                <div class="headlinesub">
                  <p>Dress (adjective) this season with new arrivals from Maison Margiela, Rick Owens, Burberry, and more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Animated>


  );
}

export default App;
