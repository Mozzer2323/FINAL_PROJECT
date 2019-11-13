import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="navwrap">
        <nav>
          <div class="menu">
            <ul>
            <div class="navlogo">
            <img src={require('./images/bespokeLogow.png')} />
          </div>
              <li><a href="#">SHOP</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">HELP</a></li>
              <li><a href="#">LOGIN</a></li>
              <li><a href="#">CART</a></li>
            </ul>
          </div>

        <div class="headlinebox">
          <div class="headlinetxt">
          <h1>Shop Our Latest Winter Arrivals</h1>
          <div class="headlinesub">
            <p>Dress (adjective) this season with new arrivals from Maison Margiela, Rick Owens, Burberry, and more.</p>
          </div>
          </div>
        </div>


        </nav>
      </div>
    </div>
  );
}

export default App;
