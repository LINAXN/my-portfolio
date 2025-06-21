// import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // مهم لتشغيل Navbar Toggle

import Logome from './assets/image.png'
function Header() {
  return (
    <>
      {/* header section start */}
      <div className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
              <a href="index.html">
                <img src={Logome} alt="Logo" /> {/*change it*/} 
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blog.html">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* banner section start */}
      <div className="banner_section layout_padding">
        <section className="slide-wrapper">
          <div className="container-fluid">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-bs-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-bs-target="#myCarousel" data-slide-to="1"></li>
                <li data-bs-target="#myCarousel" data-slide-to="2"></li>
                <li data-bs-target="#myCarousel" data-slide-to="3"></li>
              </ol>
              <div className="carousel-inner">
                {[1, 2, 3, 4].map((item, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    key={index}
                  >
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="banner_taital_main">
                            <h3 className="banner_text">Hello Am <br />Joy Seno</h3>
                            <h1 className="banner_taital">UI/UX Designer</h1>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="social_icon">
                            <ul>
                              <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Header;
