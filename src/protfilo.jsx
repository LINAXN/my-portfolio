import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/jquery.mCustomScrollbar.min.css';
import '@fortawesome/fontawesome-free/css/font-awesome.min.css';

function App() {
  return (
    <div>
      {/* Header Section */}
      <div className="header_section header_bg">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
              <a href="#"><img src="/images/logo.png" alt="logo" /></a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Service</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="portfolio_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="portfolio_taital">My <span className="portfolio_taital_1">Portfolio</span></h1>
            </div>
          </div>

          <div className="portfolio_section_2">
            <div className="row">
              {['img-1.png', 'img-2.png', 'img-3.png', 'img-4.png', 'img-5.png'].map((img, index) => (
                <div className="col-md-4" key={index}>
                  <div className="container_main">
                    <img src={`/images/${img}`} alt="" className="image" />
                    <div className="overlay">
                      <div className="text">
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="seemore_bt"><a href="#">See More</a></div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer_section">
        <div className="container">
          <div className="location_text">
            <ul>
              <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            2020 All Rights Reserved. Design by <a href="https://html.design">Free Html Templates</a> Distribution by <a href="https://themewagon.com">ThemeWagon</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
