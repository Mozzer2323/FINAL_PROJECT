import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">

      <div class="navbar">
        <div class="logo">
      <img src={require('./images/bespokeLogow.png')} />
      </div>
      <div class="navmenu">
        <ul>
          <li><a class='no-link' href="#">SHOP</a>
            <ul class="megamenu">
              <li>
                <h1>Title</h1>
                <a href="#">Submenu 1</a>
                <a href="#">Submenu 2</a>
                <a href="#">Submenu 3</a>
                <a href="#">Submenu 4</a>
                <a href="#">Submenu 5</a>
                <a href="#">Submenu 6</a>
                <a href="#">Submenu 7</a>
              </li>
            </ul>
           </li>   
                <li><a class='no-link' href="#">ABOUT</a></li>
                <li><a class='no-link' href="#">HELP</a></li>
                <li><a class='no-link' href="#">LOGIN</a></li>
                <li><a class='no-link' href="#">CART</a></li>
                </ul>
           </div>
      
      <br></br>
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
</div>
  );
}

export default App;
